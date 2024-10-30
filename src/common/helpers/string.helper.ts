export const isStringEmpty = (value: string): boolean => {
  if (!value) return true

  return value.trim().length === 0
}
