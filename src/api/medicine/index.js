import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Medicine, { schema } from './model'

const router = new Router()
const { med_name, description, dosage, prev_dose_taken, instructions, next_dose_days, next_dose_hours, next_dose_minutes, nextDose, dosage_times, doses_per_day, main_usage } = schema.tree

/**
 * @api {post} /medicines Create medicine
 * @apiName CreateMedicine
 * @apiGroup Medicine
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam med_name Medicine's med_name.
 * @apiParam description Medicine's description.
 * @apiParam dosage Medicine's dosage.
 * @apiParam prev_dose_taken Medicine's prev_dose_taken.
 * @apiParam instructions Medicine's instructions.
 * @apiParam nextDose Medicine's nextDose.
 * @apiParam dosage_times Medicine's dosage_times.
 * @apiParam doses_per_day Medicine's doses_per_day.
 * @apiParam main_usage Medicine's main_usage.
 * @apiSuccess {Object} medicine Medicine's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Medicine not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ med_name, description, dosage, prev_dose_taken, instructions, next_dose_days, next_dose_hours, next_dose_minutes, nextDose, dosage_times, doses_per_day, main_usage }),
  create)

/**
 * @api {get} /medicines Retrieve medicines
 * @apiName RetrieveMedicines
 * @apiGroup Medicine
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} medicines List of medicines.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /medicines/:id Retrieve medicine
 * @apiName RetrieveMedicine
 * @apiGroup Medicine
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} medicine Medicine's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Medicine not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /medicines/:id Update medicine
 * @apiName UpdateMedicine
 * @apiGroup Medicine
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam med_name Medicine's med_name.
 * @apiParam description Medicine's description.
 * @apiParam dosage Medicine's dosage.
 * @apiParam prev_dose_taken Medicine's prev_dose_taken.
 * @apiParam instructions Medicine's instructions.
 * @apiParam next_dose_days Medicine's next_dose_days.
 * @apiParam next_dose_hours Medicine's next_dose_hours.
 * @apiParam next_dose_minutes Medicine's next_dose_minutes.
 * @apiParam nextDose Medicine's nextDose.
 * @apiParam dosage_times Medicine's dosage_times.
 * @apiParam doses_per_day Medicine's doses_per_day.
 * @apiParam main_usage Medicine's main_usage.
 * @apiSuccess {Object} medicine Medicine's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Medicine not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ med_name, description, dosage, prev_dose_taken, instructions, next_dose_days, next_dose_hours, next_dose_minutes, nextDose, dosage_times, doses_per_day, main_usage }),
  update)

/**
 * @api {delete} /medicines/:id Delete medicine
 * @apiName DeleteMedicine
 * @apiGroup Medicine
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Medicine not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
