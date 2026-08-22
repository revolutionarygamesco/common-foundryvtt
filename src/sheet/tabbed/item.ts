import {
  TabbedSheetMixin,
  type TabbedSheet,
  type TabbedSheetStatics
} from './mixin.ts'

type TabbedItemBaseType =
  typeof foundry.applications.sheets.ItemSheetV2
  & foundry.abstract.Constructor<foundry.applications.api.HandlebarsApplication>
  & foundry.abstract.Constructor<TabbedSheet>
  & TabbedSheetStatics

const TabbedItemBase: TabbedItemBaseType = TabbedSheetMixin(
  foundry.applications.api.HandlebarsApplicationMixin(
    foundry.applications.sheets.ItemSheetV2
  )
)

export class TabbedItemSheet<S = foundry.documents.ItemSystem> extends TabbedItemBase {
  get system (): S {
    return this.item.system as unknown as S
  }
}
