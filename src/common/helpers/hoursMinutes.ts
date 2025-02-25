const getHoursMinutes = (minutes) => {
  // const minutes = 131
  const hours = Math.floor(minutes / 60)
  const minutesRest = minutes % 60
  return hours === 1 ? '1 hora' : `${hours} horas${minutesRest ? ` ${minutesRest}m` : ''}`
}
