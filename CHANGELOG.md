# v0.5.9
* Add subclasses of [ObjectField](https://foundryvtt.com/api/classes/foundry.data.fields.ObjectField.html).

# v0.5.8
* Add `sort` to `Actor`, `Adventure`, `Item`, `JournalEntry`,
  `JournalEntryPage`, `Scene`, `TokenDocument`, and `RollTable`.

# v0.5.7
* Switch [DocumentSheetV2._prepareSubmitData](https://foundryvtt.com/api/classes/foundry.applications.api.DocumentSheetV2.html#_preparesubmitdata)
  return type from `object` to `Record<string, any>`. This allows methods to
  refer to the return object’s properties without causing an error.

# v0.5.6
* Add [_onRevealSecret](https://foundryvtt.com/api/classes/foundry.applications.api.DocumentSheetV2.html#_onrevealsecret)
  and [_prepareSubmitData](https://foundryvtt.com/api/classes/foundry.applications.api.DocumentSheetV2.html#_preparesubmitdata)
  to [DocumentSheetV2](https://foundryvtt.com/api/classes/foundry.applications.api.DocumentSheetV2.html).

# v0.5.5
* Add [HandlebarsApplication._configureRenderParts](https://foundryvtt.com/api/classes/foundry.HandlebarsApplication.html#_configurerenderparts)

# v0.5.4
* Methods
  * [getClickedDocument](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/getClickedDocument)

# v0.5.3
* Fix [ApplicationTabsConfiguration](https://foundryvtt.com/api/interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

# v0.5.2
* Added [ClientDocument](https://foundryvtt.com/api/classes/foundry.ClientDocument.html)
* Added more details for
  [SchemaField](https://foundryvtt.com/api/classes/foundry.data.fields.SchemaField.html),
  [ActorSheetV2](https://foundryvtt.com/api/classes/foundry.applications.sheets.ActorSheetV2.html),
  [ItemSheetV2](https://foundryvtt.com/api/classes/foundry.applications.sheets.ItemSheetV2.html), and
  [JournalEntryPageSheet](https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageSheet.html).
* Fixed a typo in types for `ContextMenu`.

# v0.5.1
* Sort classes to correct namespaces.

# v0.5.0
* Added types for [DocumentSheetConfig](https://foundryvtt.com/api/classes/foundry.applications.apps.DocumentSheetConfig.html)
* Added a bunch more detail for [ApplicationV2](https://foundryvtt.com/api/classes/foundry.applications.api.ApplicationV2.html)
  and its endless tree of child classes.

# v0.4.2
* Trying to fully type [CONFIG](https://foundryvtt.com/api/modules/CONFIG.html)
  is far beyond what this library sets out to do, but by defining it as a
  global `any`, we at least acknowledge that it’s there and keep Typescript
  from being an impediment.

# v0.4.1
* Add types for data models.

# v0.4.0
* Mocks
  * [mockHooks](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockHooks)

# v0.3.17
* Fill in more methods for `Hooks`
  * `events`
  * `call`
  * `callAll`
  * `onError`

# v0.3.16
* `foundry.fields` doesn’t actually exist, no matter what
  [the documentation](https://foundryvtt.com/api/classes/foundry.helpers.ClientSettings.html#register)
  suggests. That’s all under `foundry.data.fields`.

# v0.3.15
* Add types for `foundry.fields`

# v0.3.14
* `Actor`, `Item`, `JournalEntry`, `Scene`, and `RollTable`only _sometimes_ have a `Folder`. It should by optional, not a requirement.

# v0.3.13
* Fixed export for  [getPronouns](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/getPronouns)

### v0.3.12
* Added `Actor.prototypeToken`

### v0.3.11
* Mocks
  * [mockModules](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockModules)

### v0.3.10
* Add folder to `Actor`, `Item`, `JournalEntry`, `Scene`, and `RollTable`.

### v0.3.9
* Fix types for `Drawing.text` and `Folder.type`
* Methods
  * [findFolder](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/findFolder)
* Mocks
  * [mockFolders](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockFolders)

### v0.3.8
* Add types for `Document.create`.

### v0.3.7
* Add types for child folders.

### v0.3.6
* Wrappers
  * [getPronouns](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/getPronouns)

### v0.3.5
* Move `game`, `ui`, and `Hooks` to interfaces, so they can be expanded upon.
* Fixes for _Pirate Borg_ system
  * Die can go all the way down to 0
  * Change `formula` from `Die` to `string`. `Die` works great for a single
    die, but it breaks as soon as you throw in something like `2d6`.

### v0.3.4
* Added types for `foundry.documents.Folder`
* Improved typing for _Pirate Borg_ system.

### v0.3.3
* Added types for `foundry.applications.fields`

### v0.3.2
* Fixed bug exporting `drawStr`

### v0.3.1
* Wrappers
  * [drawStr](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/drawStr)

### v0.3.0
* Types
  * `global`
    * `game.user`
* Wrappers
  * [check](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/check)
  * [drawGuarded](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/drawGuarded)
  * [registerAPI](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/registerAPI)
  * [scopeLocalizer](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/scopeLocalizer)
  * [whisper](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/whisper)
* Mocks
  * Reusable, configurable mocks
    * [mockChatMessage](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockChatMessage)
    * [mockUser](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockUser)

### v0.2.0
* Updated `mockTables` to handle multiple tables.

### v0.1.0
* Types
  * `global`
    * `Hooks`
    * `game`
    * `ui`
  * `foundry`
    * `abstract`
      * `Constructor`
      * `Document`
      * `Named`
      * `Imaged`
      * `Subtyped`
      * `CreateOperation`
    * `applications`
      * `api`
        * `ApplicationV2`
        * `HandlebarsApplication`
        * `HandlebarsApplicationMixin`
        * `DialogV2`
        * `handlebars`
          * `loadTemplates`
          * `renderTemplate`
          * `getTemplate`
        * `ux`
          * `DragDrop`
          * `FormDataExtended`
          * `TextEditor`
    * `audio`
      * `AudioHelper`
      * `Sound`
    * `dice`
      * `Roll`
    * `documents`
      * `ActorSystem`
      * `Actor`
      * `Adventure`
      * `ChatMessage`
      * `Drawing`
      * `ItemSystem`
      * `Item`
      * `JournalEntry`
      * `JournalEntryPageSystem`
      * `JournalEntryPage`
      * `RegionDocument`
      * `Scene`
      * `TokenDocument`
      * `RollTable`
      * `TableResult`
      * `User`
      * `Users`
    * `helpers`
      * `GameTime`
    * `packages`
      * `Module`
    * `types`
      * `ApplicationPosition`
      * `ElevatedPoint`
      * `TimeComponents
    * `ui`
      * `Notification`
      * `NotificationOptions`
      * `NotificationUpdate`
    * `utils`
      * `Collection`
      * `deepClone`
      * `escapeHTML`
      * `unescapeHTML`
      * `fromUuid`
* Methods
  * [generateApplicationPosition](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/generateApplicationPosition)
  * [getDroppedDocument](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/getDroppedDocument)
  * [generateID](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/generateID)
  * [getID](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/getID)
  * [makeLink](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/makeLink)
* Wrappers
  * [drawDescription](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/drawDescription)
  * [drawName](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/drawName)
  * [roll](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/roll)
  * [rollTable](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/rollTable)
* Mocks
  * Automatically mocking
    * `foundry.utils.deepClone`
    * `foundry.utils.escapeHTML`
    * `foundry.utils.unescapeHTML`
    * `foundry.utils.fromUuid`
    * `game.i18n.localize`
  * Reusable, configurable mocks
    * [mockDragData](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockDragData)
    * [mockFromUuid](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockFromUuid)
    * [mockLocalize](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockLocalize)
    * [mockRoll](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockRoll)
    * [mockTable](https://github.com/revolutionarygamesco/common-foundryvtt/wiki/mockTable)