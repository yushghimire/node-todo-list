import { Router } from 'express';
import * as loginService from '../services/loginService';
import * as logout from '../services/sessionService';

const router = Router();

// Login by the user
router.post('/', (req, res, next) => {
  if (!req.token) {
    loginService
      .loginUser(req.body)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  } else {
    next('route');
  }
});

// log out
router.get('/', (req, res, next) => {
  logout
    .deleteSession(req.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
