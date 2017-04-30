import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Medicine } from '.'

const app = () => express(routes)

let userSession, anotherSession, medicine

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  medicine = await Medicine.create({ user })
})

test('POST /medicines 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, med_name: 'test', description: 'test', dosage: 'test', prev_dose_taken: 'test', instructions: 'test', next_dose_days: 'test', next_dose_hours: 'test', next_dose_minutes: 'test', nextDose: 'test', dosage_times: 'test', doses_per_day: 'test', main_usage: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.med_name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.dosage).toEqual('test')
  expect(body.prev_dose_taken).toEqual('test')
  expect(body.instructions).toEqual('test')
  expect(body.next_dose_days).toEqual('test')
  expect(body.next_dose_hours).toEqual('test')
  expect(body.next_dose_minutes).toEqual('test')
  expect(body.nextDose).toEqual('test')
  expect(body.dosage_times).toEqual('test')
  expect(body.doses_per_day).toEqual('test')
  expect(body.main_usage).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('POST /medicines 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /medicines 200 (user)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
  expect(typeof body[0].user).toEqual('object')
})

test('GET /medicines 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /medicines/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`/${medicine.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(medicine.id)
  expect(typeof body.user).toEqual('object')
})

test('GET /medicines/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${medicine.id}`)
  expect(status).toBe(401)
})

test('GET /medicines/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /medicines/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`/${medicine.id}`)
    .send({ access_token: userSession, med_name: 'test', description: 'test', dosage: 'test', prev_dose_taken: 'test', instructions: 'test', next_dose_days: 'test', next_dose_hours: 'test', next_dose_minutes: 'test', nextDose: 'test', dosage_times: 'test', doses_per_day: 'test', main_usage: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(medicine.id)
  expect(body.med_name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.dosage).toEqual('test')
  expect(body.prev_dose_taken).toEqual('test')
  expect(body.instructions).toEqual('test')
  expect(body.next_dose_days).toEqual('test')
  expect(body.next_dose_hours).toEqual('test')
  expect(body.next_dose_minutes).toEqual('test')
  expect(body.nextDose).toEqual('test')
  expect(body.dosage_times).toEqual('test')
  expect(body.doses_per_day).toEqual('test')
  expect(body.main_usage).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('PUT /medicines/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`/${medicine.id}`)
    .send({ access_token: anotherSession, med_name: 'test', description: 'test', dosage: 'test', prev_dose_taken: 'test', instructions: 'test', next_dose_days: 'test', next_dose_hours: 'test', next_dose_minutes: 'test', nextDose: 'test', dosage_times: 'test', doses_per_day: 'test', main_usage: 'test' })
  expect(status).toBe(401)
})

test('PUT /medicines/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${medicine.id}`)
  expect(status).toBe(401)
})

test('PUT /medicines/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: anotherSession, med_name: 'test', description: 'test', dosage: 'test', prev_dose_taken: 'test', instructions: 'test', next_dose_days: 'test', next_dose_hours: 'test', next_dose_minutes: 'test', nextDose: 'test', dosage_times: 'test', doses_per_day: 'test', main_usage: 'test' })
  expect(status).toBe(404)
})

test('DELETE /medicines/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${medicine.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /medicines/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`/${medicine.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /medicines/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${medicine.id}`)
  expect(status).toBe(401)
})

test('DELETE /medicines/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
