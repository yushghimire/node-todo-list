import { Router } from 'express';

import * as tagsService from '../services/tagsService';

const router = Router();

router.get('/', (req, res, next) => {
  tagsService
    .getTags()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
