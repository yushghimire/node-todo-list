import { Router } from 'express';
import * as tokenService from '../services/refreshTokenService';

const router = Router();

router.get('/', (req, res, next) => {
  console.log('-----------------');
  tokenService
    .checkRefreshToken(req.headers.authorization)
    .then(data => res.json({ accessToken: data }))
    .catch(err => next(err));
});

export default router;
