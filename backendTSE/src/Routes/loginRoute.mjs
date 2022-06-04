import { Router } from "express";

import { checkLogin } from '../Controllers/loginController.mjs';

const router = Router();

router.get('/:user/:password/', checkLogin)

export default router;