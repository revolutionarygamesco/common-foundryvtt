import { stubGlobalPath } from './stub.ts'

export const mockRoll = (total: number = 1): void => {
  const Roll = function (this: foundry.dice.Roll) {
    this.total = total
    this.evaluate = async () => this
    this.evaluateSync = () => this
  } as unknown as typeof foundry.dice.Roll

  stubGlobalPath('foundry.dice.Roll', Roll)
}
