export {}

declare global {
  namespace foundry {
    namespace fields {
      class StringField {
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

      class NumberField {
        constructor (options?: object, context?: object)
      }

      class AlphaField extends NumberField {}
      class AngleField extends StringField {}
      class HueField extends StringField {}
      class IntegerSortField extends StringField {}
    }
  }
}
