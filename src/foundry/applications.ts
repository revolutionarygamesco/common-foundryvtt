export {}

declare global {
  namespace foundry {
    namespace applications {
      namespace api {
        class ApplicationV2 {
          constructor(options?: any)

          options: Readonly<Record<string, any>>
          position: types.ApplicationPosition
          tabGroups: Record<string, string | null>

          static BASE_APPLICATION: typeof ApplicationV2
          static DEFAULT_OPTIONS: Record<string, any>
          static RENDER_STATES: Record<string, number>
          static emittedEvents: Readonly<'prerender' | 'render' | 'close' | 'position'>
          static TABS: Record<string, types.ApplicationTabsConfiguration>

          get children (): Map<string, ApplicationV2>
          get classList (): DOMTokenList
          get element (): HTMLElement
          get form (): HTMLElement | null
          get hasFrame (): boolean
          get id (): string
          get minimized (): boolean
          get parent (): ApplicationV2 | null
          get rendered (): boolean
          get state (): number
          get title (): string
          get window (): Record<string, HTMLElement | Function | string | boolean | types.ApplicationPosition>

          addEventListener (type: string, listener: (event: Event) => any, options?: { once?: boolean }): void
          attachWindow (options?: Record<string, any>): Promise<ApplicationV2>
          bringToFront (): void
          changeTab (tab: string, group: string, options?: Record<string, any>): void
          close (options?: Record<string, any>): Promise<ApplicationV2>
          detachWindow (options?: Record<string, any>): Promise<ApplicationV2>
          dispatchEvent (event: Event): boolean
          maximize (): Promise<void>
          minimize (): Promise<void>
          removeEventListener (type: string, listener: (event: Event) => any): void
          render (options?: Record<string, any>): Promise<ApplicationV2>
          renderChild (app: ApplicationV2, options: Record<string, any>): Promise<ApplicationV2>
          setPosition (position: Partial<types.ApplicationPosition>): types.ApplicationPosition
          submit (submitOptions?: Record<string, any>): Promise<any>

          protected _attachFrameListeners (): void
          protected _canAttach (): boolean
          protected _canRender (options: Record<string, any>): false | void
          protected _configureRenderOptions (options: Record<string, any>): void
          protected _createContextMenu (handler: () => Array<Record<string, any>>, selector: string, options?: Record<string, any>): ux.ContextMenu
          protected _getFrameButtons (options: Record<string, any>): Array<Record<string, any>>
          protected _getHeaderControls (): Array<Record<string, any>>
          protected _getTabsConfig (group: string): types.ApplicationTabsConfiguration | null
          protected _headerControlButtons (): Generator<Record<string, any>, any, any>
          protected _headerControlContextEntries (): Generator<Record<string, any>, any, any>
          protected _initializeApplicationOptions (options: Record<string, any>): Record<string, any>
          protected _insertElement (element: HTMLElement, options?: Record<string, any>): Promise<void>
          protected _onAttach (from: abstract.Document, to: abstract.Document): void
          protected _onChangeForm (formConfig: Record<string, any>, event: Event): void
          protected _onClickAction (event: PointerEvent, target: HTMLElement): void
          protected _onClickTab (event: PointerEvent): void
          protected _onClose (options: Record<string, any>): void
          protected _onDetach (from: abstract.Document, to: abstract.Document): void
          protected _onFirstRender (context: Record<string, any>, options: Record<string, any>): Promise<void>
          protected _onPosition (position: types.ApplicationPosition): void
          protected _onRender (context: Record<string, any>, options: Record<string, any>): Promise<void>
          protected _onSubmitForm (formConfig: Record<string, any>, event: Event | SubmitEvent): Promise<void>
          protected _postRender (context: Record<string, any>, options: Record<string, any>): Promise<void>
          protected _preClose (options: Record<string, any>): Promise<void>
          protected _preFirstRender (context: Record<string, any>, options: Record<string, any>): Promise<void>
          protected _prepareContext (options: Record<string, any>): Promise<Record<string, any>>
          protected _prepareTabs (group: string): Record<string, types.ApplicationTab>
          protected _prePosition (position: types.ApplicationPosition) : void
          protected _preREnder (context: Record<string, any>, options: Record<string, any>): Promise<void>
          protected _refit (positionUpdate?: Partial<types.ApplicationPosition>): void
          protected _removeElement (element: HTMLElement): void
          protected _renderFrame (options: Record<string, any>): Promise<HTMLElement>
          protected _renderFrameButtons (options: Record<string, any>): Promise<void>
          protected _renderHeaderControl (control: Record<string, any>): HTMLElement
          protected _replaceHTML (result: any, content: HTMLElement, options: Record<string, any>): void
          protected _tearDown (options: Record<string, any>): void
          protected _updateFrame (options: Record<string, any>): void
          protected _updatePosition (position: types.ApplicationPosition): types.ApplicationPosition

          static inheritanceChain (): Generator<typeof ApplicationV2, void, unknown>
          static instances (): Generator<typeof ApplicationV2, any, any>
          static parseCSSDimension (style: string, parentDimension: number): number | void
          static waitForImages (element: HTMLElement): Promise<void>
        }

        class HandlebarsApplication extends ApplicationV2 {
          dragDrop?: ux.DragDrop[]

          static PARTS: Record<string, { template: string; [k: string]: any }>

          protected _preparePartContext(partId: string, context: Record<string, any>, options: Record<string, any>): Promise<Record<string, any>>
        }

        function HandlebarsApplicationMixin<T extends foundry.abstract.Constructor<ApplicationV2>>(
          Base: T,
        ): T & foundry.abstract.Constructor<HandlebarsApplication> & {
          PARTS: typeof HandlebarsApplication.PARTS
        }

        class DialogV2 extends ApplicationV2 {
          constructor(options?: Record<string, any>)

          static wait<T = string>(config?: Record<string, any>): Promise<T | null>
          static prompt<T = string>(config?: Record<string, any>): Promise<T | null>
          static confirm<T = boolean>(config?: Record<string, any>): Promise<T | null>
          static input<T = Record<string, unknown>>(config?: Record<string, any>): Promise<T | null>
          static query<T = unknown>(
            user: documents.User | string,
            type: 'input' | 'prompt' | 'confirm' | 'wait',
            config?: Record<string, any>,
          ): Promise<T | null>
        }

        class DocumentSheetV2 extends ApplicationV2 {
          constructor(options: any, ...args: any[])

          get document (): foundry.ClientDocument
          get isEditable (): boolean
          get isVisible (): boolean
        }
      }

      namespace apps {
        class DocumentSheetConfig extends api.ApplicationV2 {
          static PARTS: Record<string, { template: string; [k: string]: any }>
          static getSheetClassesForSubType (documentName: string, subType?: string): { defaultClass: string, defaultClasses: Record<string, string>, sheetClasses: Record<string, string> }
          static getSheetThemeForDocument (document: abstract.Document): string
          static initializeSheets (): Promise<void>
          static registerSheet (documentClass: any, scope: string, sheetClass: typeof api.ApplicationV2, options?: Record<string, any>): void
          static unregisterSheet (documentClass: any, scope: string, sheetClass: typeof api.ApplicationV2, options?: { types?: string[] }): void
          static updateDefaultSheets (setting?: Record<string, string>): void
        }

        class DocumentOwnershipConfig extends api.DocumentSheetV2 {}

        class GridConfig extends api.DocumentSheetV2 {
          constructor(options?: Record<string, any>)
        }
      }

      namespace sheets {
        class ActiveEffectConfig extends api.DocumentSheetV2 {}
        class AdventureImporterV2 extends api.DocumentSheetV2 {}
        class CardConfig extends api.DocumentSheetV2 {}
        class CardsConfig extends api.DocumentSheetV2 {}
        class CombatantConfig extends api.DocumentSheetV2 {}
        class FolderConfig extends api.DocumentSheetV2 {}
        class LevelConfig extends api.DocumentSheetV2 {}
        class MacroConfig extends api.DocumentSheetV2 {}
        class PlaceableConfig extends api.DocumentSheetV2 {}
        class PlaylistConfig extends api.DocumentSheetV2 {}
        class RegionBehaviorConfig extends api.DocumentSheetV2 {}
        class RollTableSheet extends api.DocumentSheetV2 {}
        class SceneConfig extends api.DocumentSheetV2 {}
        class TableResultConfig extends api.DocumentSheetV2 {}
        class UserConfig extends api.DocumentSheetV2 {}
        class AdventureExporter extends api.DocumentSheetV2 {}
        class BaseSheet extends api.DocumentSheetV2 {}

        class ActorSheetV2 extends api.DocumentSheetV2 {
          get actor (): documents.Actor
          get token (): documents.TokenDocument | null
        }

        class ItemSheetV2 extends api.DocumentSheetV2 {
          get actor (): documents.Actor | null
          get item (): documents.Item
        }

        namespace journal {
          class JournalEntryCategoryConfig extends api.DocumentSheetV2 {}
          class JournalEntryPageSheet extends api.DocumentSheetV2 {
            get isView (): boolean
            get page (): documents.JournalEntryPage
          }
        }
      }

      namespace fields {
        function createCheckboxInput(config?: Record<string, any>): HTMLInputElement
        function createEditorInput(config?: Record<string, any>): HTMLDivElement
        function createFontAwesomeIcon(glyph: string, options?: Record<string, any>): HTMLElement
        function createFormGroup(config?: Record<string, any>): HTMLDivElement
        function createMultiSelectInput(config?: Record<string, any>): Element
        function createNumberInput(config?: Record<string, any>): HTMLInputElement
        function createSelectInput(config?: Record<string, any>): HTMLSelectElement
        function createTextareaInput(config?: Record<string, any>): HTMLTextAreaElement
        function createTextInput(config?: Record<string, any>): HTMLInputElement
        function prepareSelectOptionGroups(config?: Record<string, any>): { group: string; options: Array<Record<string, any>> }[]
        function setInputAttributes(input: HTMLElement, config?: Record<string, any>): void
      }

      namespace handlebars {
        function loadTemplates(paths: string[] | Record<string, string>): Promise<unknown[]>
        function renderTemplate(path: string, data: Record<string, any>): Promise<string>
        function getTemplate(path: string, id?: string): Promise<unknown>
      }

      namespace ux {
        class ContextMenu {
          constructor (container: any, selector: string, menuItems: Array<Record<string, any>>, options?: Record<string, any>)

          menuItems: Array<Record<string, any>>
          onClose: (event: PointerEvent, target: HTMLElement) => unknown
          onOpen: (event: PointerEvent, target: HTMLElement) => unknown

          get element (): HTMLElement
          get eventName (): string
          get expandUp (): boolean
          get fixed (): boolean
          get relative (): 'target' | 'cursor'
          get selector (): string
          get target (): HTMLElement
          static get implementation (): typeof ContextMenu

          activateListeners (menu: HTMLElement, options?: Record<string, any>): void
          close (options?: { animate?: boolean, target?: HTMLElement }): Promise<void>
          render (target: HTMLElement, options?: Record<string, any>): Promise<void>
        }

        class DragDrop {
          constructor(config?: Record<string, any>)

          static implementation: typeof DragDrop

          bind(html: HTMLElement): DragDrop
          permissions: {
            dragstart: any
            drop: any
          }
          callbacks: {
            dragstart: any
            dragover: any
            drop: any
          }
        }

        class FormDataExtended extends FormData {
          constructor(form: HTMLFormElement, options?: Record<string, any>)
          readonly object: Record<string, unknown>
        }

        class TextEditor {
          static enrichHTML(content: string, options?: Record<string, any>): Promise<string>
          static getDragEventData(event: DragEvent): Record<string, any>
        }
      }
    }
  }
}
