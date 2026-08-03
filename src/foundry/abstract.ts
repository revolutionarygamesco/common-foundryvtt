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
        readonly flags: Record<string, Record<string, unknown>>

        toObject(source?: boolean): Record<string, any>
        create(data?: Record<string, any>, operation?: Record<string, any>): Promise<this | undefined>
        update(data?: Record<string, any>, operation?: Record<string, any>): Promise<this | undefined>
        delete(operation?: Record<string, any>): Promise<this | undefined>

        getFlag<T>(scope: string, key: string): T | undefined
        setFlag<T>(scope: string, key: string, value: T): Promise<this>
        unsetFlag(scope: string, key: string): Promise<this>

        createEmbeddedDocuments(
          embeddedName: string,
          data?: Array<Record<string, any>>,
          operation?: Record<string, any>
        ): Promise<Document[]>
        updateEmbeddedDocuments(
          embeddedName: string,
          updates?: Array<Record<string, any>>,
          operation?: Record<string, any>
        ): Promise<Document[]>
        deleteEmbeddedDocuments(
          embeddedName: string,
          ids: string[],
          operation?: Record<string, any>
        ): Promise<Document[]>
      }

      interface Named { name: string }
      interface Imaged { img: string }
      interface Subtyped<S> {
        type: string
        system: S
      }

      type CreateOperation = Document | Document[] | undefined

      class DataModel {
        constructor(data?: Record<string, any>, options?: Record<string, any>)
        parent: DataModel | null
        get invalid (): boolean
        get schema (): foundry.data.fields.DataModelSchemaField
        get validationErrors (): { fields: Record<string, any>, joint: Record<string, any> | null }
        static get schema (): foundry.data.fields.DataModelSchemaField
        clone (data?: Record<string, any>, context?: Record<string, any>): DataModel | Promise<DataModel>
        getFieldForProperty (key: string | string[]): foundry.data.fields.DataField | undefined
        reset (): void
        toJSON (): Record<string, any>
        toObject (source?: boolean): Record<string, any>
        updateSource (changes?: Record<string, any>, options?: Record<string, any>): Record<string, any>
        validate (options?: Record<string, any>): boolean
        static cleanData (data?: Record<string, any>, options?: Record<string, any>): Record<string, any>
        static defineSchema (): foundry.types.DataSchema
        static fromJSON (json: string): DataModel
        static fromSource (source: Record<string, any>, context?: Record<string, any>): DataModel
        static migrateData (source: Record<string, any>, options?: Record<string, any>): Record<string, any>
        static migrateDataSafe (source: Record<string, any>, options?: Record<string, any>): Record<string, any>
        static shimData (data: Record<string, any>, options?: {  embedded?: boolean }): Record<string, any>
        static validateJoint (data: Record<string, any>): void
      }

      class TypeDataModel<ModelData extends object> extends DataModel {}
    }

    interface ClientDocument extends abstract.Document {
      readonly isOwner: boolean
      readonly limited: boolean
      readonly visible: boolean
      readonly permission: number
      readonly hasPlayerOwner: boolean
    }
  }
}
