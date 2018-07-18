import Joi from 'joi';
import { validate } from '../utils/validate';
import * as userService from '../services/userService';

const SCHEMA = {
  first_name: Joi.string()
    .label('first_name')
    .max(90)
    .required(),
  last_name: Joi.string()
    .label('last_name')
    .max(90)
    .required(),
  email: Joi.string()
    .label('email')
    .required(),
  password: Joi.string()
    .label('Password')
    .required()
};

/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function userValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

/**
 * Validate users existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function findUser(req, res, next) {
  return userService
    .getUser(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

export { findUser, userValidator };
