import { type Sheet } from './sheet.ts'
import { type SheetTab } from './tab.ts'

const TAB_GROUP = 'primary'

export interface TabbedSheet {
  _onDrop(event: DragEvent): Promise<void>
  _canDragDrop(selector: string): boolean
  _getTemplate(tab: SheetTab<any>, context?: Record<string, any>): string
}

export interface TabbedSheetStatics {
  tabs: readonly SheetTab<any>[]
  tabLabelPrefix: string
}

export const TabbedSheetMixin = <S extends foundry.abstract.Constructor<Sheet>>(
  SheetClass: S
): S & foundry.abstract.Constructor<TabbedSheet> & TabbedSheetStatics => {
  class Tabbed extends SheetClass {
    static tabs: readonly SheetTab<any>[] = []
    static tabLabelPrefix: string = ''

    protected get sheetTabs (): readonly SheetTab<any>[] {
      return (this.constructor as typeof Tabbed).tabs
    }

    protected _initializeApplicationOptions (
      options: Record<string, any>
    ): Record<string, any> {
      const merged = super._initializeApplicationOptions(options)
      merged.actions = {
        ...merged.actions,
        ...Object.assign({}, ...this.sheetTabs.map(tab => tab.actions ?? {}))
      }
      merged.dragDrop = [
        ...(merged.dragDrop ?? []),
        ...this.sheetTabs.flatMap(tab => (tab.dropSelectors ?? []).map(dropSelector => ({ dropSelector })))
      ]
      return merged
    }

    protected _getTabsConfig (
      group: string
    ): foundry.types.ApplicationTabsConfiguration | null {
      if (group !== TAB_GROUP) return super._getTabsConfig(group)
      const prefix = (this.constructor as typeof Tabbed).tabLabelPrefix
      return {
        tabs: this.sheetTabs.map(tab => ({ id: tab.id, icon: tab.icon })),
        initial: this.sheetTabs[0]?.id,
        ...(prefix ? { labelPrefix: prefix } : {})
      }
    }

    protected _configureRenderParts (
      options: Record<string, any>
    ): Record<string, foundry.HandlebarsTemplatePart> {
      const parts = super._configureRenderParts(options)
      parts.tabs = { template: 'templates/generic/tab-navigation.hbs' }
      for (const tab of this.sheetTabs) {
        parts[tab.id] = { template: this._getTemplate(tab), scrollable: [''] }
      }
      return parts
    }

    protected _configureRenderOptions (
      options: Record<string, any>
    ): void {
      const requested = Array.isArray(options.parts)
        ? [...options.parts] as string[]
        : null
      super._configureRenderOptions(options)
      if (requested) { options.parts = requested; return }
      const chrome = Object.keys((this.constructor as typeof Tabbed & { PARTS?: Record<string, any> }).PARTS ?? {})
      options.parts = [...chrome]
      if (this.document.limited) return
      options.parts.push('tabs', ...this.sheetTabs.map(tab => tab.id))
    }

    protected async _preparePartContext (
      id: string,
      context: Record<string, any>,
      options: Record<string, any>
    ): Promise<Record<string, any>> {
      context = await super._preparePartContext(id, context, options)
      if (context.tabs?.[id]) context.tab = context.tabs[id]
      const tab = this.sheetTabs.find(candidate => candidate.id === id)
      await tab?.prepareContext?.(this, context)
      return context
    }

    protected async _prepareContext (
      options: Record<string, any>
    ): Promise<Record<string, any>> {
      const context = await super._prepareContext(options)
      context.document = this.document
      context.editable = this.isEditable
      context.tabs = this._prepareTabs(TAB_GROUP)
      return context
    }

    _prepareSubmitData (
      event: SubmitEvent,
      form: HTMLFormElement,
      formData: foundry.applications.ux.FormDataExtended,
      updateData?: Record<string, any>
    ): Record<string, any> {
      const submitData = super._prepareSubmitData(event, form, formData, updateData)
      for (const tab of this.sheetTabs) tab.prepareSubmitData?.(this, submitData)
      return submitData
    }

    protected async _onRender (
      context: Record<string, any>,
      options: Record<string, any>
    ): Promise<void> {
      await super._onRender(context, options)
      const rendered = options.parts as string[] | undefined
      for (const tab of this.sheetTabs) {
        if (rendered && !rendered.includes(tab.id)) continue
        tab.onRender?.(this, this.element)
      }
    }

    _getTemplate (
      tab: SheetTab<any>
    ): string {
      return tab.getTemplate?.(this)
        ?? tab.templates.default
        ?? Object.values(tab.templates)[0]
        ?? 'tab.hbs'
    }

    _canDragDrop (
      _selector: string
    ): boolean {
      super._canDragDrop?.(_selector)
      return this.isEditable
    }

    async _onDrop (
      event: DragEvent
    ): Promise<void> {
      for (const tab of this.sheetTabs) {
        if (await tab.onDrop?.(this, event)) return
      }
      await super._onDrop?.(event)
    }
  }

  return Tabbed
}
