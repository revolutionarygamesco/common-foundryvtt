export {}

declare global {
  namespace foundry {
    namespace applications {
      namespace api {
        class ApplicationV2 {
          constructor(options?: any)

          readonly options: any
          readonly element: HTMLElement
          readonly rendered: boolean

          render(options?: boolean | object, _options?: object): Promise<this>
          close(options?: object): Promise<this>

          protected _prepareContext(options: object): Promise<object>
          protected _onFirstRender(context: object, options: object): Promise<void>
          protected _onRender(context: object, options: object): Promise<void>
          protected _onClose(options: object): void

          static DEFAULT_OPTIONS: any
          static TABS: any
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
      }

      namespace handlebars {
        function loadTemplates(paths: string[] | Record<string, string>): Promise<unknown[]>
        function renderTemplate(path: string, data: object): Promise<string>
        function getTemplate(path: string, id?: string): Promise<unknown>
      }

      namespace ux {
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
