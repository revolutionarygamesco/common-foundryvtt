import { vi } from 'vitest'

export const mockRoll = (total: number = 1): void => {
  const Roll = function (this: foundry.dice.Roll) {
    this.total = total
    this.evaluate = async () => this
    this.evaluateSync = () => this
  } as unknown as typeof foundry.dice.Roll

  const foundryGlobal = (globalThis as { foundry?: object }).foundry ?? {}
  vi.stubGlobal('foundry', { ...foundryGlobal, dice: { Roll } })
}
