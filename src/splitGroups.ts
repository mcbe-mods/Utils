/**
 * Divide a number of items into groups of how many each
 * @param {number} sum totals
 * @param {number} groupSize Size per group (default 64)
 * @returns {number[]}
 * @example
 * ```js
 * splitGroups(65) // => [64, 1]
 * splitGroups(140) // => [64, 64, 12]
 * splitGroups(65, 16) // => [16, 16, 16, 16, 1]
 * ```
 */
export function splitGroups(sum: number, groupSize = 64) {
	const groups = []
	while (sum > 0) {
		const group = Math.min(sum, groupSize)
		groups.push(group)
		sum -= group
	}
	return groups
}
