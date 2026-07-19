# Revolutionary Games Common Foundry VTT Library
![Latest Release](https://img.shields.io/github/v/release/revolutionarygamesco/common-foundryvtt?label=Latest+release&style=for-the-badge)
![Test Status](https://img.shields.io/github/actions/workflow/status/revolutionarygamesco/common-foundryvtt/test.yml?label=Test+status&style=for-the-badge)
![License](https://img.shields.io/github/license/revolutionarygamesco/common-foundryvtt?style=for-the-badge)

A library of methods and types that we tend to use in all (or at least most) of our Foundry VTT modules.

## Getting Started

To install the Revolutionary Games Common Foundry VTT Library in your project, run:

```console
npm install @revolutionarygamesco/common-foundryvtt --save
```

You can then add methods from the library and call them like this:

```typescript
import { generateID } from '@revolutionarygamesco/common-foundryvtt'

const id = generateID() // A random, 16-digit alphanumeric string
```

## Types

This library provides Typescript types for Foundry VTT (verified as of v14), which makes it incompatible with other attempts to provide such types, like [fvtt-types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types).

If you import any methods from this library, it will add all of the types to your global namespace (under `foundry.`, e.g., `foundry.documents.JournalEntry`). If you just want the types but don’t have any use for any other methods, you can include them by adding this to any file in your project:

```typescript
import '@revolutionarygamesco/common-foundryvtt'
```

## Testing

This library ships mocks for [Vitest](https://vitest.dev/) that cover some of Foundry’s methods and objects (including `game` and `foundry`). Add it to your `vitest.config.ts` like so:

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['@revolutionarygamesco/common-foundryvtt/mocks/setup'],
    unstubGlobals: true
  }
})
```

## Methods

### Methods

* [generateApplicationPosition](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/generateApplicationPosition)
* [getDroppedDocument](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/getDroppedDocument)
* [generateID](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/generateID)
* [getID](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/getID)
* [makeLink](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/makeLink)

### Wrappers

* [check](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/check)
* [drawDescription](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/drawDescription)
* [drawGuarded](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/drawGuarded)
* [drawName](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/drawName)
* [registerAPI](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/registerAPI)
* [roll](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/roll)
* [rollTable](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/rollTable)
* [scopeLocalizer](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/scopeLocalizer)
* [whisper](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/whisper)

### Mocks

* [mockChatMessage](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockChatMessage)
* [mockDragData](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockDragData)
* [mockFromUuid](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockFromUuid)
* [mockLocalize](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockLocalize)
* [mockRoll](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockRoll)
* [mockTables](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockTables)
* [mockUser](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockUser)
