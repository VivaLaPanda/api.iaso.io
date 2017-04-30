import { Medicine } from '.'
import { User } from '../user'

let user, medicine

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  medicine = await Medicine.create({ user, med_name: 'test', description: 'test', dosage: 'test', prev_dose_taken: 'test', instructions: 'test', next_dose_days: 'test', next_dose_hours: 'test', next_dose_minutes: 'test', nextDose: 'test', dosage_times: 'test', doses_per_day: 'test', main_usage: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = medicine.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(medicine.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.med_name).toBe(medicine.med_name)
    expect(view.description).toBe(medicine.description)
    expect(view.dosage).toBe(medicine.dosage)
    expect(view.prev_dose_taken).toBe(medicine.prev_dose_taken)
    expect(view.instructions).toBe(medicine.instructions)
    expect(view.next_dose_days).toBe(medicine.next_dose_days)
    expect(view.next_dose_hours).toBe(medicine.next_dose_hours)
    expect(view.next_dose_minutes).toBe(medicine.next_dose_minutes)
    expect(view.nextDose).toBe(medicine.nextDose)
    expect(view.dosage_times).toBe(medicine.dosage_times)
    expect(view.doses_per_day).toBe(medicine.doses_per_day)
    expect(view.main_usage).toBe(medicine.main_usage)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = medicine.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(medicine.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.med_name).toBe(medicine.med_name)
    expect(view.description).toBe(medicine.description)
    expect(view.dosage).toBe(medicine.dosage)
    expect(view.prev_dose_taken).toBe(medicine.prev_dose_taken)
    expect(view.instructions).toBe(medicine.instructions)
    expect(view.next_dose_days).toBe(medicine.next_dose_days)
    expect(view.next_dose_hours).toBe(medicine.next_dose_hours)
    expect(view.next_dose_minutes).toBe(medicine.next_dose_minutes)
    expect(view.nextDose).toBe(medicine.nextDose)
    expect(view.dosage_times).toBe(medicine.dosage_times)
    expect(view.doses_per_day).toBe(medicine.doses_per_day)
    expect(view.main_usage).toBe(medicine.main_usage)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
