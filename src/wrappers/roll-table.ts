export const rollTable = async (
  uuid: string,
  options: object = { displayChat: false }
): Promise<{ roll: foundry.dice.Roll, results: foundry.documents.TableResult[] } | null> => {
  const table = await foundry.utils.fromUuid(uuid) as foundry.documents.RollTable | null
  return table ? await table.draw(options) : null
}
