import jwt from 'jsonwebtoken';
import Boom from 'boom';

export function generateTokens(data) {
  return {
    accessToken: generateAccessToken(data),
    refreshToken: generateRefreshToken(data)
  };
}

export function generateAccessToken(data) {
  return jwt.sign({ encryptedData: data }, 'hellofromtheotherside', {
    expiresIn: 10
  });
}

export function generateRefreshToken(data) {
  return jwt.sign(
    {
      encryptedData: data
    },
    'hello',
    {
      expiresIn: 800000
    }
  );
}

export function verifyAccessToken(token) {
  return jwt.verify(token, 'hellofromtheotherside', (err, decode) => {
    if (!err) {

      return Promise.resolve(decode);
    } else {
      return Promise.reject(Boom.unauthorized('Access Token Unauthorized'));
    }
  });
}

export function verifyRefreshToken(token) {
  return jwt.verify(token, 'hello', (err, decode) => {
    if (!err) {
      return decode;
    } else {
      throw Boom.unauthorized('Refresh Token Unauthorized');
    }
  });
}
