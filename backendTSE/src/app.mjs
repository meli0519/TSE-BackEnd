import express from 'express'
import cors from 'cors'
import loginRoutes from './routes/loginRoute.mjs'
import departmentRoutes from './Routes/departmentRoute.mjs'

const app = express() 

//settings
app.set('port', "3000")

//middlewares
app.use(cors('http://localhost:4200/'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/login', loginRoutes);
app.use('/department',departmentRoutes);
export default app