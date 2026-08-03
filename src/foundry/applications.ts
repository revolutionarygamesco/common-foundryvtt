export {}

declare global {
  namespace foundry {
    namespace applications {
      namespace api {
        class ApplicationV2 {
          constructor(options?: any)

          options: Readonly<object>
          position: types.ApplicationPosition
          tabGroups: Record<string, string | null>

          static BASE_APPLICATION: typeof ApplicationV2
          static DEFAULT_OPTIONS: object
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
          get window (): object

          addEventListener (type: string, listener: (event: Event) => any, options?: { once?: boolean }): void
          attachWindow (options?: object): Promise<ApplicationV2>
          bringToFront (): void
          changeTab (tab: string, group: string, options?: object): void
          close (options?: object): Promise<ApplicationV2>
          detachWindow (options?: object): Promise<ApplicationV2>
          dispatchEvent (event: Event): boolean
          maximize (): Promise<void>
          minimize (): Promise<void>
          removeEventListener (type: string, listener: (event: Event) => any): void
          render (options?: object): Promise<ApplicationV2>
          renderChild (app: ApplicationV2, options: object): Promise<ApplicationV2>
          setPosition (position: Partial<types.ApplicationPosition>): types.ApplicationPosition
          submit (submitOptions?: object): Promise<any>

          protected _attachFrameListeners (): void
          protected _canAttach (): boolean
          protected _canRender (options: object): false | void
          protected _configureRenderOptions (options: object): void
          protected _createContextMenu (handler: () => object[], selector: string, options?: object): ux.ContextMenu
          protected _getFrameButtons (options: object): object[]
          protected _getHeaderControls (): object[]
          protected _getTabsConfig (group: string): types.ApplicationTabsConfiguration | null
          protected _headerControlButtons (): Generator<object, any, any>
          protected _headerControlContextEntries (): Generator<object, any, any>
          protected _initializeApplicationOptions (options: object): object
          protected _insertElement (element: HTMLElement, options?: object): Promise<void>
          protected _onAttach (from: abstract.Document, to: abstract.Document): void
          protected _onChangeForm (formConfig: object, event: Event): void
          protected _onClickAction (event: PointerEvent, target: HTMLElement): void
          protected _onClickTab (event: PointerEvent): void
          protected _onClose (options: object): void
          protected _onDetach (from: abstract.Document, to: abstract.Document): void
          protected _onFirstRender (context: object, options: object): Promise<void>
          protected _onPosition (position: types.ApplicationPosition): void
          protected _onRender (context: object, options: object): Promise<void>
          protected _onSubmitForm (formConfig: object, event: Event | SubmitEvent): Promise<void>
          protected _postRender (context: object, options: object): Promise<void>
          protected _preClose (options: object): Promise<void>
          protected _preFirstRender (context: object, options: object): Promise<void>
          protected _prepareContext (options: object): Promise<object>
          protected _prepareTabs (group: string): Record<string, types.ApplicationTab>
          protected _prePosition (position: types.ApplicationPosition) : void
          protected _preREnder (context: object, options: object): Promise<void>
          protected _refit (positionUpdate?: Partial<types.ApplicationPosition>): void
          protected _removeElement (element: HTMLElement): void
          protected _renderFrame (options: object): Promise<HTMLElement>
          protected _renderFrameButtons (options: object): Promise<void>
          protected _renderHeaderControl (control: object): HTMLElement
          protected _replaceHTML (result: any, content: HTMLElement, options: object): void
          protected _tearDown (options: object): void
          protected _updateFrame (options: object): void
          protected _updatePosition (position: types.ApplicationPosition): types.ApplicationPosition

          static inheritanceChain (): Generator<typeof ApplicationV2, void, unknown>
          static instances (): Generator<typeof ApplicationV2, any, any>
          static parseCSSDimension (style: string, parentDimension: number): number | void
          static waitForImages (element: HTMLElement): Promise<void>
        }

        class HandlebarsApplication extends ApplicationV2 {
          dragDrop?: ux.DragDrop[]

          static PARTS: Record<string, { template: string; [k: string]: any }>

          protected _preparePartContext(partId: string, context: object, options: object): Promise<object>
        }

        function HandlebarsApplicationMixin<T extends foundry.abstract.Constructor<ApplicationV2>>(
          Base: T,
        ): T & foundry.abstract.Constructor<HandlebarsApplication> & {
          PARTS: typeof HandlebarsApplication.PARTS
        }

        class DialogV2 extends ApplicationV2 {
          constructor(options?: object)

          static wait<T = string>(config?: object): Promise<T | null>
          static prompt<T = string>(config?: object): Promise<T | null>
          static confirm<T = boolean>(config?: object): Promise<T | null>
          static input<T = Record<string, unknown>>(config?: object): Promise<T | null>
          static query<T = unknown>(
            user: documents.User | string,
            type: 'input' | 'prompt' | 'confirm' | 'wait',
            config?: object,
          ): Promise<T | null>
        }

        class DocumentSheetV2 extends ApplicationV2 {
          constructor(options: any, ...args: any[])
        }
      }

      namespace apps {
        class DocumentSheetConfig extends api.ApplicationV2 {
          static PARTS: Record<string, { template: string; [k: string]: any }>
          static getSheetClassesForSubType (documentName: string, subType?: string): { defaultClass: string, defaultClasses: Record<string, string>, sheetClasses: Record<string, string> }
          static getSheetThemeForDocument (document: abstract.Document): string
          static initializeSheets (): Promise<void>
          static registerSheet (documentClass: any, scope: string, sheetClass: typeof api.ApplicationV2, options?: object): void
          static unregisterSheet (documentClass: any, scope: string, sheetClass: typeof api.ApplicationV2, options?: { types?: string[] }): void
          static updateDefaultSheets (setting?: Record<string, string>): void
        }

        class DocumentOwnershipConfig extends api.DocumentSheetV2 {}

        class GridConfig extends api.DocumentSheetV2 {
          constructor(options?: object)
        }
      }

      namespace sheets {
        class ActiveEffectConfig extends api.DocumentSheetV2 {}
        class ActorSheetV2 extends api.DocumentSheetV2 {}
        class AdventureImporterV2 extends api.DocumentSheetV2 {}
        class CardConfig extends api.DocumentSheetV2 {}
        class CardsConfig extends api.DocumentSheetV2 {}
        class CombatantConfig extends api.DocumentSheetV2 {}
        class FolderConfig extends api.DocumentSheetV2 {}
        class ItemSheetV2 extends api.DocumentSheetV2 {}
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

        namespace journal {
          class JournalEntryCategoryConfig extends api.DocumentSheetV2 {}
          class JournalEntryPageSheet extends api.DocumentSheetV2 {}
        }
      }

      namespace fields {
        function createCheckboxInput(config?: object): HTMLInputElement
        function createEditorInput(config?: object): HTMLDivElement
        function createFontAwesomeIcon(glyph: string, options?: object): HTMLElement
        function createFormGroup(config?: object): HTMLDivElement
        function createMultiSelectInput(config?: object): Element
        function createNumberInput(config?: object): HTMLInputElement
        function createSelectInput(config?: object): HTMLSelectElement
        function createTextareaInput(config?: object): HTMLTextAreaElement
        function createTextInput(config?: object): HTMLInputElement
        function prepareSelectOptionGroups(config?: object): { group: string; options: object[] }[]
        function setInputAttributes(input: HTMLElement, config?: object): void
      }

      namespace handlebars {
        function loadTemplates(paths: string[] | Record<string, string>): Promise<unknown[]>
        function renderTemplate(path: string, data: object): Promise<string>
        function getTemplate(path: string, id?: string): Promise<unknown>
      }

      namespace ux {
        class ContextMenu {
          constructor (container: any, selector: string, menuItems: object[], options?: object)

          menuItems: object[]
          onClose: (event: PointerEvent, target: HTMLElement) => unknown
          onOpen: (event: PointerEvent, target: HTMLElement) => unknown

          get element (): HTMLElement
          get eventName (): string
          get expandUp (): boolean
          get fixed (): boolean
          get relative (): 'target' | 'cursor'
          get selectot (): string
          get target (): HTMLElement
          static get implementation (): typeof ContextMenu

          activateListeners (menu: HTMLElement, options?: object): void
          close (options?: { animate?: boolean, target?: HTMLElement }): Promise<void>
          render (target: HTMLElement, options?: object): Promise<void>
        }

        class DragDrop {
          constructor(config?: object)

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
          constructor(form: HTMLFormElement, options?: object)
          readonly object: Record<string, unknown>
        }

        class TextEditor {
          static enrichHTML(content: string, options?: object): Promise<string>
          static getDragEventData(event: DragEvent): object
        }
      }
    }
  }
}
