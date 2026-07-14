import { defineConfig, type ViteUserConfig } from 'vitest/config'

const config: ViteUserConfig = defineConfig({
  test: {
    setupFiles: ['./src/mocks/setup.ts'],
    unstubGlobals: true
  }
})

export default config
