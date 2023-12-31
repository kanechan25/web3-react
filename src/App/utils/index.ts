export const shortenString = (text: string | null | undefined, prefix: number, suffix: number) => {
  if (text) {
    const firstStrings = text.slice(0, prefix)
    const lastStrings = text.slice(-suffix)
    const formatString = firstStrings + '...' + lastStrings
    return formatString
  }
  return 'non-text'
}
export const formatNumberDecimal = (num: number | string, decimals = 2) => {
  if (Number.isNaN(num)) {
    return 0
  }
  if (Number(num) < 1000) {
    const number = parseFloat(Number(num).toFixed(decimals))
    return number
  } else {
    const number = parseFloat(Number(num).toFixed(decimals))
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}
