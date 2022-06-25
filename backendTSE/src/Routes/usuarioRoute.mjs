import { Router } from "express";
import { getUsuarios, addUsuario, deleteUsuario, 
    getUsuarioById, updateUsuario, getDistritos } from "../Controllers/usuarioController.mjs"

const router = Router();

router.get('/get', getUsuarios)

router.get('/getDistritos', getDistritos)

router.post('/add', addUsuario)

router.delete('/delete/:id', deleteUsuario)

router.get('/getById/:id', getUsuarioById)

router.put('/update', updateUsuario)

export default router;

