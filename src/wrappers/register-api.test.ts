import { describe, it, expect } from 'vitest'
import { stubGlobalPath } from '../mocks/stub.ts'
import { registerAPI } from './register-api.ts'

describe('registerAPI', () => {
  it('assigns the api on init', () => {
    const module = {} as foundry.packages.Module
    const api = { greet: () => 'hi' }
    stubGlobalPath('game.modules', new Map([['test-module', module]]))
    stubGlobalPath('Hooks.once', (_event: string, cb: () => void) => { cb() })

    registerAPI('test-module', api)

    expect(module.api).toEqual(api)
    expect(module.api.greet!()).toBe('hi')
  })

  it('does nothing if the module is not found', () => {
    stubGlobalPath('game.modules', new Map())
    stubGlobalPath('Hooks.once', (_event: string, cb: () => void) => { cb() })
    expect(() => {
      registerAPI('missing-module', { greet: () => 'hi' })
    }).not.toThrow()
  })
})
