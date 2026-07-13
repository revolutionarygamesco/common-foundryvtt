export {}

declare global {
  namespace foundry {
    namespace packages {
      interface Module {
        api: Record<string, Function>
      }
    }
  }
}
