import { Router } from "express";
import { addRequest, addArchivos, getClasificador,
    getSolicitudes} from '../Controllers/requestController.mjs'

const router = Router();

router.post('/addRequest', addRequest)
router.post('/addArchivos', addArchivos)
router.get('/getClasificador', getClasificador)
router.get('/getSolicitudes', getSolicitudes)


export default router;