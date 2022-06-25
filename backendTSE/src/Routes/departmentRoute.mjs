import { Router } from "express";

import {getDepartaments, deleteDepartment, addDepartment, 
    getDistrito, getCantones, getDepartmentForId,updateDepartment} from '../Controllers/departmentController.mjs';
const router = Router();

router.get('/getDepartment', getDepartaments);
router.delete('/deleteDepartment/:id',deleteDepartment);
router.post('/sendDepartment',addDepartment);
router.put('/updateDepartment',updateDepartment);
router.get('/getDistrito/:id',getDistrito);
router.get('/getCantones/:id',getCantones);
router.get('/getDepartmentForId/:id',getDepartmentForId);
export default router;