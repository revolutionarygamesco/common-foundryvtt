import { type Sheet } from '../sheet.ts'

export interface SheetTab<S extends Sheet = Sheet> {
  id: string
  templates: Record<string, string>
  icon?: string
  actions?: Record<string, (this: S, ...args: any[]) => unknown>
  dropSelectors?: string[]
  getTemplate?(sheet: S): string
  prepareContext?(sheet: S, context: Record<string, any>): void | Promise<void>
  prepareSubmitData?(sheet: S, submitData: Record<string, any>): void
  onDrop?(sheet: S, event: DragEvent): boolean | Promise<boolean>
  onRender?(sheet: S, element: HTMLElement): void
}
