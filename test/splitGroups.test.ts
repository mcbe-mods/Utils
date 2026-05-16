import { describe, expect, it } from 'vitest'
import { splitGroups } from '../src/index'

describe('splitGroups', () => {
  it('65 with default 64 → [64, 1]', () => {
    expect(splitGroups(65)).toEqual([64, 1])
  })

  it('140 with default 64 → [64, 64, 12]', () => {
    expect(splitGroups(140)).toEqual([64, 64, 12])
  })

  it('65 with groupSize 16 → [16, 16, 16, 16, 1]', () => {
    expect(splitGroups(65, 16)).toEqual([16, 16, 16, 16, 1])
  })

  it('0 → []', () => {
    expect(splitGroups(0)).toEqual([])
  })

  it('64 with default 64 → [64]', () => {
    expect(splitGroups(64)).toEqual([64])
  })

  it('1 with default 64 → [1]', () => {
    expect(splitGroups(1)).toEqual([1])
  })

  it('sum equals groupSize exactly → [groupSize]', () => {
    expect(splitGroups(16, 16)).toEqual([16])
  })
})
