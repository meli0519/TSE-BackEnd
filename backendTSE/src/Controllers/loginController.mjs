import {getconnection} from '../DataBase/connection.mjs'
import { v4 as uuidv4} from 'uuid';
import {getToken, getTokenData} from '../config/jwt.config.mjs'
import {getTemplate, sendEmail} from '../config/mail.config.mjs'
export const checkLogin = async (req, res) => {
    console.log("entro al loguear")
   const { user, password } = req.body;
   

    try {
        console.log(password);
        const pool = await getconnection();
        
         const result = await pool.request().query("exec [dbo].[verifyUser] '" + user+ "','" + password +"'");
         
        if(result.recordset[0] == null){
            console.log("falso")
            res.send(null);
        }else{
            console.log(result.recordset[0])
            res.send(result.recordset[0]);
        } 
       

        const code = uuidv4();

        const token = getToken({user, code});

        const template = getTemplate(user, token);

        await sendEmail(email, 'Este es un email de prueba', template);
        await user.save();

    } catch (error) {
        console.log(error);
        console.log(result.recordset[0]);
       // res.send(result.recordset[0]);
    }
};