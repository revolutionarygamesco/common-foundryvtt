export type Linkable = foundry.abstract.Named & Pick<foundry.abstract.Document, 'uuid'>

export const makeLink = (
  doc: Linkable | foundry.documents.TableResult
): string => {
  const { name } = doc
  const uuid = (doc as foundry.documents.TableResult).documentUuid ?? doc.uuid
  return uuid ? `@UUID[${uuid}]{${name}}` : ''
}
