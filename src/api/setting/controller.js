import _ from 'lodash'
import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Setting } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Setting.create({ ...body, user })
    .then((setting) => setting.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Setting.find(query, select, cursor)
    .populate('user')
    .then((settings) => settings.map((setting) => setting.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Setting.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then((setting) => setting ? setting.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Setting.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((setting) => setting ? _.merge(setting, body).save() : null)
    .then((setting) => setting ? setting.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Setting.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((setting) => setting ? setting.remove() : null)
    .then(success(res, 204))
    .catch(next)
