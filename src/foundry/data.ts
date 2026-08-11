export {}

declare global {
  namespace foundry {
    namespace data {
      namespace fields {
        class DataField {
          constructor (options?: Record<string, any>, context?: Record<string, any>)
        }

        class ShaderField extends DataField {}
        class AnyField extends DataField {}
        class BooleanField extends DataField {}
        class ObjectField extends DataField {}
        class DocumentOwnershipField extends ObjectField {}

        class TypeDataField extends ObjectField {
          constructor (document: abstract.Constructor<abstract.Document>, options?: Record<string, any>, context?: Record<string, any>)
        }

        class TypedObjectField<T extends DataField = DataField> extends ObjectField {
          element: T
          constructor (element: T, options?: Record<string, any>, context?: Record<string, any>)
        }

        class SchemaField extends DataField {
          fields: Record<string, DataField>
        }

        class DataModelSchemaField extends SchemaField {
          constructor (model: any, options?: Record<string, any>, context?: Record<string, any>)
        }

        class TypedSchemaField extends DataField {
          constructor (types: Record<string, any>, options?: Record<string, any>, context?: Record<string, any>)
        }

        class ArrayField<T extends DataField = DataField> extends DataField {
          element: T
          constructor (element: T, options?: Record<string, any>, context?: Record<string, any>)
        }

        class StringField extends DataField {
          constructor (options?: Record<string, any>, context?: Record<string, any>)
        }

        class ColorField extends StringField {}
        class DocumentIdField extends StringField {}
        class ForeignDocumentIdField extends DocumentIdField {}
        class DocumentUUIDField extends StringField {}
        class FilePathField extends StringField {}
        class HTMLField extends StringField {}
        class JSONField extends StringField {}
        class JavaScriptField extends StringField {}

        class DocumentTypeField extends StringField {
          constructor (documentClass?: Record<string, any>, options?: Record<string, any>, context?: Record<string, any>)
        }

        class NumberField extends DataField {
          constructor (options?: Record<string, any>, context?: Record<string, any>)
        }

        class AlphaField extends NumberField {}
        class AngleField extends StringField {}
        class HueField extends StringField {}
        class IntegerSortField extends StringField {}
      }
    }
  }
}
