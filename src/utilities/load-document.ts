export const loadDocument = async <T extends foundry.abstract.Document>(
  uuid: string,
  type?: string,
  subtype?: string
): Promise<T | null> => {
  const document = await foundry.utils.fromUuid(uuid)
  if (!document) return null

  if (type && document.documentName !== type) return null
  if (subtype && (document as any).type !== subtype) return null
  return document as T
}
