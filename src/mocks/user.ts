import { stubGlobalPath } from './stub.ts'

export const mockUser = (
  options: { id?: string, name?: string } = {}
): foundry.documents.User => {
  const user = { id: options.id ?? 'user-1', name: options.name ?? 'Test User' } as foundry.documents.User
  stubGlobalPath('game.user', user)
  return user
}
