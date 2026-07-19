import { describe, it, expect, type Mock } from 'vitest'
import { mockChatMessage } from '../mocks/chat.ts'
import { mockUser } from '../mocks/user.ts'
import { whisper } from './whisper.ts'

const payload = (create: Mock) => create.mock.calls[0]![0]

describe('whisper', () => {
  it('whispers to the current user by default', async () => {
    const create = mockChatMessage()
    const user = mockUser({ id: 'abc123', name: 'John Doe' })
    await whisper()

    expect(payload(create)).toEqual({
      speaker: { alias: user.name },
      whisper: [user.id]
    })
  })

  it('can send flavor and content', async () => {
    const recipients = ['abc123']
    const speaker = 'Conspirator'
    const flavor = 'It’s a secret!'
    const content = 'Psst!'

    const create = mockChatMessage()
    mockUser()
    await whisper({ recipients, speaker, flavor, content })

    expect(payload(create).speaker.alias).toBe(speaker)
    expect(payload(create).whisper).toEqual(recipients)
    expect(payload(create).flavor).toBe(flavor)
    expect(payload(create).content).toBe(content)
  })
})
