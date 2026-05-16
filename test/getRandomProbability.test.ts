import { describe, expect, it, vi } from 'vitest'
import { getRandomProbability } from '../src/index'

describe('getRandomProbability', () => {
  it('clamps value below 0.01 to 0.01', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(getRandomProbability(0)).toBe(true)
    expect(getRandomProbability(-10)).toBe(true)
    vi.restoreAllMocks()
  })

  it('clamps value above 100 to 100 (always true)', () => {
    expect(getRandomProbability(200)).toBe(true)
  })

  it('returns true when random < probability/100', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.04)
    expect(getRandomProbability(5)).toBe(true)
    vi.restoreAllMocks()
  })

  it('returns false when random >= probability/100', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.06)
    expect(getRandomProbability(5)).toBe(false)
    vi.restoreAllMocks()
  })
})
