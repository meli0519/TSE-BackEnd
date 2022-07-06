import { Router } from "express";
import {getAllRequest, getRequestForId,  getDocuments,
    getAllResponseState, addResponse } from '../Controllers/responseController.mjs';

const router = Router();
  
router.get('/getAllRequest',getAllRequest);
router.get('/getRequestForId/:id',getRequestForId);
router.get('/getDocuments/:id', getDocuments);
router.get('/getAllResponseState',getAllResponseState);
router.post('/addResponse', addResponse);

export default router;