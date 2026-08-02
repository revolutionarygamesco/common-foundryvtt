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
        create(data?: any, operation?: any): Promise<this | undefined>
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

      class DataModel {
        constructor(data?: object, options?: object)
        parent: DataModel | null
        get invalid (): boolean
        get schema (): foundry.data.fields.DataModelSchemaField
        get validationErrors (): { fields: object, joint: object | null }
        static get schema (): foundry.data.fields.DataModelSchemaField
        clone (data?: object, context?: object): DataModel | Promise<DataModel>
        getFieldForProperty (key: string | string[]): foundry.data.fields.DataField | undefined
        reset (): void
        toJSON (): object
        toObject (source?: boolean): object
        updateSource (changes?: object, options?: object): object
        validate (options?: object): boolean
        static cleanData (data?: object, options?: object): object
        static defineSchema (): foundry.types.DataSchema
        static fromJSON (json: string): DataModel
        static fromSource (source: object, context?: object): DataModel
        static migrateData (source: object, options?: object): object
        static migrateDataSafe (source: object, options?: object): object
        static shimData (data: object, options?: {  embedded?: boolean }): object
        static validateJoint (data: object): void
      }

      class TypeDataModel<ModelData extends object> extends DataModel {}
    }
  }
}
