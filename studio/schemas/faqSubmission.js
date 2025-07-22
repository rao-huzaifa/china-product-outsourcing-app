export default {
  name: 'faqSubmission',
  title: 'FAQ Submission',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'email', title: 'Email', type: 'string', validation: Rule => Rule.required() },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'serviceType', title: 'Service Type', type: 'string' },
    { name: 'message', title: 'Message', type: 'text', validation: Rule => Rule.required() },
    { name: 'createdAt', title: 'Submitted At', type: 'datetime', options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm', timeStep: 15, calendarTodayLabel: 'Now' }, initialValue: () => new Date().toISOString() },
  ]
} 