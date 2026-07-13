import { execFileSync } from 'node:child_process'
import { readdir, rm, writeFile } from 'node:fs/promises'

const SYSTEMS_DIR = 'src/foundry/systems'
const CONFIG = 'tsconfig.system.tmp.json'

const packs = (await readdir(SYSTEMS_DIR)).filter(file => file.endsWith('.ts')).sort()

if (packs.length === 0) {
  console.error(`No system packs found in ${SYSTEMS_DIR}/`)
  process.exit(1)
}

const failed = []

try {
  console.log('Testing system-specific types')
  for (const pack of packs) {
    const system = pack.replace(/\.ts$/, '')

    await writeFile(CONFIG, JSON.stringify({
      extends: './tsconfig.json',
      files: [`${SYSTEMS_DIR}/${pack}`],
      include: ['src'],
    }, null, 2))

    try {
      execFileSync('tsc', ['--noEmit', '-p', CONFIG], { stdio: 'inherit' })
      console.log(`  ✔ ${system}`)
    } catch {
      console.error(`  ✘ ${system}`)
      failed.push(system)
    }
  }
} finally {
  await rm(CONFIG, { force: true })
}

if (failed.length > 0) {
  console.error(`\n${failed.length} of ${packs.length} system pack(s) failed: ${failed.join(', ')}`)
  process.exit(1)
}

console.log(`\n${packs.length} system pack(s) OK`)
