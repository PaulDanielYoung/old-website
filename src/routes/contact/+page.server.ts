import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import nodemailer from 'nodemailer'

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
	name: z.string().default(''),
	email: z.string().email()
});

export const load: PageServerLoad = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data

		// Set up Nodemailer with SMTP2GO
		const transporter = nodemailer.createTransport({
			host: "mail.smtp2go.com",
			port: 2525, // 8025, 587 and 25 can also be used.
			auth: {
				user: process.env.SMTP2GO_USERNAME,
				pass: process.env.SMTP2GO_PASSWORD,
			}
		});

		// Set up the email data
		const mailOptions = {
			from: '"Personal Website Form" <admin@paulyoung.fun>',
			to: 'pauldanielyoung@outlook.com',
			subject: 'New Business Inquiry',
			text: `Name: ${form.data.name}\nEmail: ${form.data.email}`,
		};

		// Send the email
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
		});

		// Yep, return { form } here too
		return { form };
	}
};
