import express from 'express'
import cors from 'cors'
import loginRoutes from './Routes/loginRoute.mjs'
import usuarioRoutes from './Routes/usuarioRoute.mjs'
import departmentRoutes from './Routes/departmentRoute.mjs'
import requestRoute from './Routes/requestRoute.mjs'
import responseRoute from './Routes/responseRoute.mjs'

const app = express() 

//settings
app.set('port', "3000")

//middlewares
app.use(cors('http://localhost:4200/'));
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/login', loginRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/department',departmentRoutes);
app.use('/request',requestRoute);
app.use('/response',responseRoute);
export default app