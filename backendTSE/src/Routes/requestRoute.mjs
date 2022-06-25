import { Router } from "express";
import { addRequest, addArchivos } from '../Controllers/requestController.mjs'

const router = Router();

router.post('/addRequest', addRequest)
router.post('/addArchivos', addRequest)