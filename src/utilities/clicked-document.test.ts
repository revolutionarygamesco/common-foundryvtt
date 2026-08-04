import { beforeEach, describe, expect, it } from 'vitest'
import { generateID } from './generate-id.ts'
import { getClickedDocument } from './clicked-document.ts'

describe('getClickedDocument', () => {
  const id = generateID()
  const actor = { id, name: 'John Doe' } as unknown as foundry.ClientDocument
  let target: HTMLElement
  let other: HTMLElement
  let empty: HTMLElement
  let coll: foundry.utils.Collection<string, foundry.ClientDocument>

  beforeEach(() => {
    target = { closest: () => ({ dataset: { entryId: id } }) as unknown as foundry.ClientDocument } as unknown as HTMLElement
    other = { closest: () => ({ dataset: { entryId: generateID() } }) as unknown as foundry.ClientDocument } as unknown as HTMLElement
    empty = { closest: () => null } as unknown as HTMLElement
    coll = new Map() as foundry.utils.Collection<string, foundry.ClientDocument>
    coll.set(id, actor)
  })

  it('returns the document', () => {
    expect(getClickedDocument(target, coll)).toBe(actor)
  })

  it('returns null if there is no entry ID', () => {
    expect(getClickedDocument(empty, coll)).toBeNull()
  })

  it('returns null if the entry ID isn’t in the collection', () => {
    expect(getClickedDocument(other, coll)).toBeNull()
  })
})
