export {}

declare global {
  namespace foundry {
    namespace packages {
      class AdditionalTypesField extends foundry.data.fields.ObjectField {}

      interface Module {
        api: Record<string, Function>
      }
    }
  }
}
