import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Setting, { schema } from './model'

const router = new Router()
const { notification_type, initial_notification, additional_notification } = schema.tree

/**
 * @api {post} /settings Create setting
 * @apiName CreateSetting
 * @apiGroup Setting
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam notification_type Setting's notification_type.
 * @apiParam initial_notification Setting's initial_notification.
 * @apiParam additional_notification Setting's additional_notification.
 * @apiSuccess {Object} setting Setting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setting not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ notification_type, initial_notification, additional_notification }),
  create)

/**
 * @api {get} /settings Retrieve settings
 * @apiName RetrieveSettings
 * @apiGroup Setting
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} settings List of settings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /settings/:id Retrieve setting
 * @apiName RetrieveSetting
 * @apiGroup Setting
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} setting Setting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setting not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /settings/:id Update setting
 * @apiName UpdateSetting
 * @apiGroup Setting
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam notification_type Setting's notification_type.
 * @apiParam initial_notification Setting's initial_notification.
 * @apiParam additional_notification Setting's additional_notification.
 * @apiSuccess {Object} setting Setting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setting not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ notification_type, initial_notification, additional_notification }),
  update)

/**
 * @api {delete} /settings/:id Delete setting
 * @apiName DeleteSetting
 * @apiGroup Setting
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Setting not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
