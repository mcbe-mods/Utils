/**
 * Random Range Value
 * @param {number} min A random minimum
 * @param {number} max A random maximum
 * @returns {number}
 */
export function getRandomRangeValue(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
