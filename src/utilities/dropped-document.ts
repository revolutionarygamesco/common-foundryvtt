import { loadDocument } from './load-document.ts'

export const getDroppedDocument = async <T extends foundry.abstract.Document>(
  event: DragEvent,
  type?: string,
  subtype?: string
): Promise<T | null> => {
  const data = foundry.applications.ux.TextEditor.getDragEventData(event) as { uuid?: string }
  return data.uuid
    ? await loadDocument(data.uuid, type, subtype)
    : null
}
