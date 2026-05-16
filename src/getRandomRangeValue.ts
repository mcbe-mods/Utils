/**
 * Random Range Value
 * @param {number} min A random minimum
 * @param {number} max A random maximum
 * @returns {number} A random integer between min and max
 */
export function getRandomRangeValue(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
