import { Router } from "express";

import {getDepartaments, deleteDepartment, addDepartment, getDistrito} from '../Controllers/departmentController.mjs';
const router = Router();

router.get('/getDepartment', getDepartaments);
router.delete('/deleteDepartment/:id',deleteDepartment);
router.post('/sendDepartment',addDepartment);
router.get('/getDistrito',getDistrito);
export default router;