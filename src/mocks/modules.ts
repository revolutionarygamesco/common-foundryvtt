import { vi, type Mock } from 'vitest'
import { stubGlobalPath } from './stub.ts'

export const mockModules = (
  installed: string[] = []
): { modules: Map<string, foundry.packages.Module>; get: Mock } => {
  const modules = new Map<string, foundry.packages.Module>(
    installed.map(id => [id, { id, active: true } as unknown as foundry.packages.Module])
  )

  const get = vi.fn((id: string) => modules.get(id))
  stubGlobalPath('game.modules.get', get)
  return { modules, get }
}
