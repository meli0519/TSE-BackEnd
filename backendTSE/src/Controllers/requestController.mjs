import {getconnection} from '../DataBase/connection.mjs'

export const addRequest = async  (req, res) => {
    
    const {fecha_hora, id_usuario, palabra_clave, asunto_detallado, id_clasificador,  
        cantidad_archivos} = req.body;
        console.log(req.body);

    try {
        const pool = await getconnection();

        await pool.request().query("exec [dbo].[sp_addRequest] '" + fecha_hora+ "','" + id_usuario+"','"+
        palabra_clave +"','"+ asunto_detallado+"','"+ id_clasificador+"','"+ cantidad_archivos+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
}; 

export const addArchivos = async  (req, res) => {
    
    const {linea, archivo, comentario, id_usuario, fecha_hora} = req.body;

    try {
        const pool = await getconnection();
-
        await pool.request().query("exec [dbo].[sp_addArchivos] '" + linea+ "','" + archivo+"','"+
       comentario +"','"+id_usuario+"','"+ fecha_hora+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
}; 


export const getClasificador = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getAllClasificador]')
        res.json(result.recordset)

        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }

};

export const getSolicitudes = async (req, res) => {
    
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

