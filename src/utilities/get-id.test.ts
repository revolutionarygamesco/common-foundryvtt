import { describe, it, expect } from 'vitest'
import { generateID } from './generate-id.ts'
import { getID } from './get-id.ts'

describe('getID', () => {
  it('extracts the unique ID from a Foundry UUID', () => {
    const id = generateID()
    const uuid = `JournalEntry.${generateID()}.JournalEntryPage.${id}`
    expect(getID(uuid)).toBe(id)
  })
})
