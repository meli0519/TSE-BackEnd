import { Router } from "express";
import {getAllRequest, getRequestForId} from '../Controllers/responseController.mjs';

const router = Router();
  
router.get('/getAllRequest',getAllRequest);
router.get('/getRequestForId/:id',getRequestForId);

export default router;