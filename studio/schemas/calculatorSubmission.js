export default {
  name: 'calculatorSubmission',
  title: 'Calculator Submission',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'email', title: 'Email', type: 'string', validation: Rule => Rule.required() },
    { name: 'destination', title: 'Destination', type: 'string', validation: Rule => Rule.required() },
    { name: 'boxQuantity', title: 'Box Quantity', type: 'number', validation: Rule => Rule.required() },
    { name: 'length', title: 'Length (cm)', type: 'number', validation: Rule => Rule.required() },
    { name: 'width', title: 'Width (cm)', type: 'number', validation: Rule => Rule.required() },
    { name: 'height', title: 'Height (cm)', type: 'number', validation: Rule => Rule.required() },
    { name: 'weight', title: 'Weight (kg)', type: 'number', validation: Rule => Rule.required() },
    { name: 'createdAt', title: 'Submitted At', type: 'datetime', options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm', timeStep: 15, calendarTodayLabel: 'Now' }, initialValue: () => new Date().toISOString() },
  ]
} 