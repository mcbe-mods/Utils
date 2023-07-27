/**
 * Random Probability
 * @param {number} probability Probability percentage 0.01-100
 * @returns {boolean} The hit probability returns true, and vice versa false
 */
export function getRandomProbability(probability: number) {
  probability = Math.max(0.01, Math.min(100, probability))
  return Math.random() < probability / 100
}
