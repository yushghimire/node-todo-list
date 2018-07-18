import Boom from 'boom';
import User from '../models/user';
import * as tokenService from './tokenService';
import { createSession } from './sessionService';

export async function loginUser(loginParams) {
  try {
    let userDetails = await verifyUser(loginParams);
    let { id, username, last_name, email } = userDetails.toJSON();

    let tokens = tokenService.fetchTokens(userDetails.toJSON());
    let userInfo = {
      user: {
        id,
        first_name,
        last_name,
        email
      },
      tokens
    };

    await createSession(userInfo);

    return userInfo;
  } catch (err) {
    throw err;
  }
}

export function verifyUser(loginParams) {
  return new User({ email: loginParams.email, password: loginParams.password })
    .fetch()
    .then(user => {
      if (!user) {
        throw new Boom.notFound('User not found');
      }

      return user;
    });
}
