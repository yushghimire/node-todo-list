import * as TokenService from '../services/tokenService.js';

export async function checkRefreshToken(refreshToken) {
  let decodedToken = await TokenService.verifyToken(refreshToken);

  return TokenService.fetchAccessToken(decodedToken.encryptedData);
}
