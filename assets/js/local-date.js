for (const element of document.querySelectorAll('.js-local-date')) {
  const date = new Date(element.dateTime)

  if (Number.isNaN(date.getTime())) continue

  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]))

  element.textContent = `${values.year}-${values.month}-${values.day}`
}
