type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
    const adjustedDate = `${date}T00:00`;
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return formatter.format(new Date(adjustedDate))
}