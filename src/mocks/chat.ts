import { vi, type Mock } from 'vitest'
import { stubGlobalPath } from './stub.ts'

export const mockChatMessage = (): Mock => {
  const create = vi.fn(async () => undefined)
  stubGlobalPath('foundry.documents.ChatMessage.create', create)
  return create
}
