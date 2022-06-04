import {getconnection} from '../DataBase/connection.mjs'

export const checkLogin = async (req, res) => {
    console.log("entro al loguear")
    const { user } = req.params;
    const { password } = req.params;

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
       
    } catch (error) {
        console.log(error);
        console.log(result.recordset[0]);
       // res.send(result.recordset[0]);
    }
};