export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-AU', { dateStyle: 'long' }).format(new Date(dateString))
}