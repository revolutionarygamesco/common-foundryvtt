import { describe, it, expect } from 'vitest'
import { generateID } from './generate-id.ts'
import { makeLink } from './make-link.ts'

describe('makeLink', () => {
  const name = 'Name'
  const uuid = generateID()

  it('makes a link', () => {
    const actual = makeLink({ uuid, name } as unknown as foundry.documents.JournalEntry)
    expect(actual).toBe(`@UUID[${uuid}]{${name}}`)
  })

  it('returns an empty string if you pass it a null uuid', () => {
    const actual = makeLink({ uuid: null, name } as unknown as foundry.documents.JournalEntry)
    expect(actual).toBe('')
  })

  it('links to the document if provided', () => {
    const documentUuid = `JournalEntry.${uuid}.JournalEntryPage.zPBtUYuNIxPTAZ1z`
    const actual = makeLink({ uuid, name, documentUuid } as unknown as foundry.documents.TableResult)
    expect(actual).toBe(`@UUID[${documentUuid}]{${name}}`)
  })

  it('can make a link from anything with a name and a UUID', () => {
    const actual = makeLink({ uuid, name })
    expect(actual).toBe(`@UUID[${uuid}]{${name}}`)
  })
})
