export function toUpperCase(value: string): string {
  return value.toUpperCase()
}

export function capitalize(value: string): string {
  const normalizedValue = value.trim().toLowerCase()

  return normalizedValue
    ? normalizedValue[0].toUpperCase() + normalizedValue.slice(1)
    : ''
}

export function formatFullName(firstName: string, lastName: string): string {
  return `${capitalize(firstName)} ${lastName.trim().toUpperCase()}`
}
