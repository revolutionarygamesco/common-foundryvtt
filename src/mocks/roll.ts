export const mockRoll = (total: number = 1): foundry.dice.Roll => {
  const roll: foundry.dice.Roll = {
    total,
    evaluate: async () => roll,
    evaluateSync: () => roll,
  }
  return roll
}
