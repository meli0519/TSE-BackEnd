import {getconnection} from '../DataBase/connection.mjs'



export const getAllRequest = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getAllSolicitudes]')
      
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

export const getDocuments = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[getAllDocuments]'"+id+"'");
        res.send(result.recordset);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
}; 

export const getAllResponseState = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[getRespuesta_legal]')
      
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};

export const addResponse = async  (req, res) => {
    
    const {id_solicitud, id_respuesta, detalle_respuesta,   
        fecha_hora_respuesta, id_usuario_respuesta} = req.body;
        console.log(req.body);

    try {
        const pool = await getconnection();

        await pool.request().query("exec [dbo].[addResponse] '" + id_solicitud+ "','" +  id_respuesta+"','"+
        detalle_respuesta +"','"+ fecha_hora_respuesta+"','"+ id_usuario_respuesta+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
}; 