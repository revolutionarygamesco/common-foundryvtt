import { vi, type Mock } from 'vitest'
import { stubGlobalPath } from './stub.ts'

export const mockHooks = (): foundry.Hooks & {
  on: Mock
  once: Mock
  off: Mock
  call: Mock
  callAll: Mock
  onError: Mock
} => {
  const events: Record<string, Function[]> = {}
  const functions = new Map<number, { hook: string, fn: Function }>()
  let next = 1

  const off = vi.fn((hook: string, func: number | Function): void => {
    const fn = typeof func === 'number' ? functions.get(func)?.fn : func
    if (fn === undefined) return
    events[hook] = (events[hook] ?? []).filter(registered => registered !== fn)
    if (typeof func === 'number') functions.delete(func)
  })

  const on = vi.fn((hook: string, fn: Function): number => {
    (events[hook] ??= []).push(fn)
    const id = next++
    functions.set(id, { hook, fn })
    return id
  })

  const once = vi.fn((hook: string, fn: Function): number => {
    const wrapper = (...args: unknown[]): unknown => {
      off(hook, wrapper)
      return fn(...args)
    }
    return on(hook, wrapper)
  })

  const call = vi.fn((hook: string, ...args: unknown[]): boolean => {
    for (const fn of [...(events[hook] ?? [])]) {
      if (fn(...args) === false) return false
    }
    return true
  })

  const callAll = vi.fn((hook: string, ...args: unknown[]): void => {
    for (const fn of [...(events[hook] ?? [])]) fn(...args)
  })

  const onError = vi.fn((_location: string, _error: Error, _options?: object): void => {})

  const hooks = { events, on, once, off, call, callAll, onError }
  stubGlobalPath('Hooks', hooks)
  return hooks
}
