import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import nodemailer from 'nodemailer'

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
	name: z.string().default(''),
	email: z.string().email(),
	company_name: z.string().default(''),
	title: z.string().default(''),
	service: z.string().default(''),
	sub_service: z.string().default(''),
	message: z.string().default('')
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(schema);
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		if (!form.valid) {
			return fail(400, { form });
		}

		const transporter = nodemailer.createTransport({
			host: "mail.smtp2go.com",
			port: 2525, // 8025, 587 and 25 can also be used.
			auth: {
				user: process.env.SMTP2GO_USERNAME,
				pass: process.env.SMTP2GO_PASSWORD,
			}
		});

		const mailOptions = {
			from: '"Personal Website Form" <admin@paulyoung.fun>',
			to: 'pauldanielyoung@outlook.com',
			subject: 'New Business Inquiry',
			text: `Name: ${form.data.name}\nEmail: ${form.data.email}\nCompany Name: ${form.data.company_name}\nTitle: ${form.data.title}\nService: ${form.data.service}\nSub-service: ${form.data.sub_service}\nMessage: ${form.data.message}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
		});

		return { form };
	}
};
