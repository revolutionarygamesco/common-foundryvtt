export interface WhisperOptions {
  recipients: string[]
  speaker: string
  flavor: string
  content: string
}

export interface WhisperCreate {
  whisper: string[]
  speaker: {
    alias: string
  }
  flavor?: string
  content?: string
}

export const whisper = async (
  options?: Partial<WhisperOptions>
): Promise<void> => {
  const alias = options?.speaker ?? game.user.name
  const recipients = options?.recipients ?? [game.user.id]

  const data: WhisperCreate = { speaker: { alias }, whisper: recipients }
  if (options?.flavor) data.flavor = options.flavor
  if (options?.content) data.content = options.content
  await foundry.documents.ChatMessage.create(data)
}
