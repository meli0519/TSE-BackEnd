import {getconnection} from '../DataBase/connection.mjs'



export const getAllRequest = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getAllRequest]')
      
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};

export const getRequestForId = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getRequestForId]'"+id+"'")
       
        res.json(result.recordset[0])
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }
    

};