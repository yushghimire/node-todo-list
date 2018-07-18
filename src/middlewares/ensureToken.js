import * as jwt from '../utils/jwt';

function ensureToken(req, res, next) {
  jwt
      .verifyAccessToken(req.headers.authorization)
      .then(response => {
      req.id = response.encryptedData.id;

      return next();
    })
    .catch(error => next(error));
}

export { ensureToken };
