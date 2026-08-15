import { generateID } from '../utilities/generate-id.ts'

export const mockDocument = <T extends foundry.abstract.Document>(
  documentName: string,
  overrides?: Partial<T>
): T => {
  const uuid = [documentName, generateID()].join('.')
  return { uuid, ...overrides } as unknown as T
}

export const mockActor = (
  overrides?: Partial<foundry.documents.Actor>
): foundry.documents.Actor => {
  return mockDocument<foundry.documents.Actor>('Actor', overrides)
}

export const mockItem = (
  overrides?: Partial<foundry.documents.Item>
): foundry.documents.Item => {
  return mockDocument<foundry.documents.Item>('Item', overrides)
}

export const mockJournalEntry = (
  overrides?: Partial<foundry.documents.JournalEntry>
): foundry.documents.JournalEntry => {
  return mockDocument<foundry.documents.JournalEntry>('JournalEntry', overrides)
}
