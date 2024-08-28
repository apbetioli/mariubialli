import { describe, expect, it } from 'vitest'
import { getDate12MonthsAgo, getDate30DaysAgo } from './utils'

describe('utils', () => {
  it('should return the date 30 days ago', () => {
    const today = new Date('2024-08-28')
    const theDate30DaysAgo = getDate30DaysAgo(today)
    expect(theDate30DaysAgo).toEqual(new Date('2024-07-29'))
  })

  it('should return the date 12 months ago', () => {
    const today = new Date('2024-08-28')
    const theDate12MonthsAgo = getDate12MonthsAgo(today)
    expect(theDate12MonthsAgo).toEqual(new Date('2023-08-01'))
  })
})
