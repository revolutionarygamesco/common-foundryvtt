export {}

declare global {
  namespace foundry {
    namespace data {
      namespace fields {
        class DataField {
          constructor (options?: object, context?: object)
        }

        class ShaderField extends DataField {}
        class AnyField extends DataField {}
        class BooleanField extends DataField {}
        class ObjectField extends DataField {}
        class SchemaField extends DataField {}

        class DataModelSchemaField extends SchemaField {
          constructor (model: any, options?: object, context?: object)
        }

        class TypedSchemaField extends DataField {
          constructor (types: Record<string, any>, options?: object, context?: object)
        }

        class ArrayField<ElementType = DataField> extends DataField {
          constructor (element: ElementType, options?: object, context?: object)
        }

        class StringField extends DataField {
          constructor (options?: object, context?: object)
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
          constructor (documentClass?: object, options?: object, context?: object)
        }

        class NumberField extends DataField {
          constructor (options?: object, context?: object)
        }

        class AlphaField extends NumberField {}
        class AngleField extends StringField {}
        class HueField extends StringField {}
        class IntegerSortField extends StringField {}
      }
    }
  }
}
