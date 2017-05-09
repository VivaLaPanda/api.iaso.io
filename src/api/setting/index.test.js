import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Setting } from '.'

const app = () => express(routes)

let userSession, anotherSession, setting

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  setting = await Setting.create({ user })
})

test('POST /settings 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, notification_type: 'test', initial_notification: 'test', additional_notification: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.notification_type).toEqual('test')
  expect(body.initial_notification).toEqual('test')
  expect(body.additional_notification).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('POST /settings 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /settings 200 (user)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
  expect(typeof body[0].user).toEqual('object')
})

test('GET /settings 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /settings/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`/${setting.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(setting.id)
  expect(typeof body.user).toEqual('object')
})

test('GET /settings/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${setting.id}`)
  expect(status).toBe(401)
})

test('GET /settings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /settings/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`/${setting.id}`)
    .send({ access_token: userSession, notification_type: 'test', initial_notification: 'test', additional_notification: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(setting.id)
  expect(body.notification_type).toEqual('test')
  expect(body.initial_notification).toEqual('test')
  expect(body.additional_notification).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('PUT /settings/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`/${setting.id}`)
    .send({ access_token: anotherSession, notification_type: 'test', initial_notification: 'test', additional_notification: 'test' })
  expect(status).toBe(401)
})

test('PUT /settings/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${setting.id}`)
  expect(status).toBe(401)
})

test('PUT /settings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: anotherSession, notification_type: 'test', initial_notification: 'test', additional_notification: 'test' })
  expect(status).toBe(404)
})

test('DELETE /settings/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${setting.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /settings/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`/${setting.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /settings/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${setting.id}`)
  expect(status).toBe(401)
})

test('DELETE /settings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
