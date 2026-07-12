declare namespace foundry {
  namespace dice {
    class Roll {
      constructor(formula: string, data?: object, options?: object)
      evaluate(options?: object): Promise<Roll>
      evaluateSync(options?: object): Roll
      total: number
    }
  }
}
