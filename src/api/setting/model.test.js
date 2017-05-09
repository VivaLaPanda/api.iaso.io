import { Setting } from '.'
import { User } from '../user'

let user, setting

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  setting = await Setting.create({ user, notification_type: 'test', initial_notification: 'test', additional_notification: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = setting.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(setting.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.notification_type).toBe(setting.notification_type)
    expect(view.initial_notification).toBe(setting.initial_notification)
    expect(view.additional_notification).toBe(setting.additional_notification)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = setting.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(setting.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.notification_type).toBe(setting.notification_type)
    expect(view.initial_notification).toBe(setting.initial_notification)
    expect(view.additional_notification).toBe(setting.additional_notification)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
