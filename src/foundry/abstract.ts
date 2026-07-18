export {}

declare global {
  namespace foundry {
    namespace abstract {
      type Constructor<T = object> = new (...args: any[]) => T

      interface Document {
        readonly id: string | null
        readonly uuid: string | null
        readonly documentName: string
        readonly parent: Document | null
        readonly parentCollection: string | null
        readonly flags: any

        toObject(source?: boolean): any
        update(data?: any, operation?: any): Promise<this | undefined>
        delete(operation?: any): Promise<this | undefined>

        getFlag<T>(scope: string, key: string): T | undefined
        setFlag<T>(scope: string, key: string, value: T): Promise<this>
        unsetFlag(scope: string, key: string): Promise<this>

        createEmbeddedDocuments(
          embeddedName: string,
          data?: object[],
          operation?: object
        ): Promise<Document[]>
        updateEmbeddedDocuments(
          embeddedName: string,
          updates?: object[],
          operation?: object
        ): Promise<Document[]>
        deleteEmbeddedDocuments(
          embeddedName: string,
          ids: string[],
          operation?: object
        ): Promise<Document[]>
      }

      interface Named { name: string }
      interface Imaged { img: string }
      interface Subtyped<S> {
        type: string
        system: S
      }

      type CreateOperation = Document | Document[] | undefined
    }
  }
}
