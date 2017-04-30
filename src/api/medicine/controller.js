import _ from 'lodash'
import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Medicine } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Medicine.create({ ...body, user })
    .then((medicine) => medicine.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Medicine.find(query, select, cursor)
    .populate('user')
    .then((medicines) => medicines.map((medicine) => medicine.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Medicine.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then((medicine) => medicine ? medicine.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Medicine.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((medicine) => medicine ? _.merge(medicine, body).save() : null)
    .then((medicine) => medicine ? medicine.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Medicine.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((medicine) => medicine ? medicine.remove() : null)
    .then(success(res, 204))
    .catch(next)
