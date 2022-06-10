import express from 'express'
import cors from 'cors'
import loginRoutes from './Routes/loginRoute.mjs'
import usuarioRoutes from './Routes/usuarioRoute.mjs'


const app = express() 

//settings
app.set('port', "3000")

//middlewares
app.use(cors('http://localhost:4200/'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/login', loginRoutes);
app.use('/usuario', usuarioRoutes);
export default app