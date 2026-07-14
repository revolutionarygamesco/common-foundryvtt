export const roll = (
  expr: string
): number => {
  const roll = new foundry.dice.Roll(expr)
  roll.evaluateSync()
  return roll.total
}
