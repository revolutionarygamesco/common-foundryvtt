import { stubGlobalPath } from './stub.ts'

export const mockDragData = (
  data: { type?: string; uuid?: string } = {}
): void => {
  const getDragEventData = (_event: DragEvent): object => data
  stubGlobalPath('foundry.applications.ux.TextEditor.getDragEventData', getDragEventData)
}
