export const rollTable = async (
  uuid: string,
  options: object = { displayChat: false }
): Promise<{ roll: foundry.dice.Roll, results: foundry.documents.TableResult[] } | null> => {
  const table = await foundry.utils.fromUuid(uuid)
  return typeof (table as foundry.documents.RollTable)?.draw === 'function'
    ? await (table as foundry.documents.RollTable).draw(options)
    : null
}
