export default {
  name: 'newsletterSubscription',
  title: 'Newsletter Subscription',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string', validation: Rule => Rule.required() },
    { name: 'createdAt', title: 'Subscribed At', type: 'datetime', options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm', timeStep: 15, calendarTodayLabel: 'Now' }, initialValue: () => new Date().toISOString() },
  ]
} 