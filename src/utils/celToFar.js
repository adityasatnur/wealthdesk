export function convertToFarenheit(deg) {
  return parseFloat(((deg * 9) / 5 + 32).toFixed(2));
}
export function convertToCelcious(deg) {
  return parseFloat((((deg - 32) * 5) / 9).toFixed(2));
}
