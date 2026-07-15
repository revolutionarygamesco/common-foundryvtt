export const getDroppedDocument = async <T extends foundry.abstract.Document>(
  event: DragEvent,
  type?: string,
  subtype?: string
): Promise<T | null> => {
  const data = foundry.applications.ux.TextEditor.getDragEventData(event) as { uuid?: string }
  if (!data.uuid) return null

  const document = await foundry.utils.fromUuid(data.uuid)
  if (!document) return null

  if (type && document.documentName !== type) return null
  if (subtype && (document as any).type !== subtype) return null
  return document as T
}
