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
        class SchemaField extends DataField {}

        class DataModelSchemaField extends SchemaField {
          constructor (model: any, options?: Record<string, any>, context?: Record<string, any>)
        }

        class TypedSchemaField extends DataField {
          constructor (types: Record<string, any>, options?: Record<string, any>, context?: Record<string, any>)
        }

        class ArrayField<ElementType = DataField> extends DataField {
          constructor (element: ElementType, options?: Record<string, any>, context?: Record<string, any>)
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
