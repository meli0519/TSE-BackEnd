import { Router } from "express";

import { checkLogin } from '../Controllers/loginController.mjs';

const router = Router();

router.post('/check', checkLogin)

export default router;