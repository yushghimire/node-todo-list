Simport Session from '../models/session';

/**
 * 
 * @param {*} userParams 
 */

export function createSession(userParams) {
  return new Session({
    user_id: userParams.user.id,
    refresh_token: userParams.tokens.refreshToken,
    email: userParams.user.email
  })
    .save()
    .then(Session => Session.refresh());
}

/**
 * 
 * @param {*} id 
 */

export function deleteSession(id) {
  return new Session({ user_id: id })
    .fetch()
    .then(session => session.destroy());
}
