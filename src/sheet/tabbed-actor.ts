import {
  TabbedSheetMixin,
  type TabbedSheet,
  type TabbedSheetStatics
} from './tabbed.ts'

type TabbedActorBaseType =
  typeof foundry.applications.sheets.ActorSheetV2
  & foundry.abstract.Constructor<foundry.applications.api.HandlebarsApplication>
  & foundry.abstract.Constructor<TabbedSheet>
  & TabbedSheetStatics

const TabbedActorBase: TabbedActorBaseType = TabbedSheetMixin(
  foundry.applications.api.HandlebarsApplicationMixin(
    foundry.applications.sheets.ActorSheetV2
  )
)

export class TabbedActorSheet<S = foundry.documents.ActorSystem> extends TabbedActorBase {
  get system (): S {
    return this.actor.system as unknown as S
  }
}
