import { defineConfig, type UserConfig } from 'tsdown'

const config: UserConfig = defineConfig({
  entry: ['src/index.ts', 'src/foundry/systems/*.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  publint: true,
  attw: { profile: 'esm-only' },
})

export default config
