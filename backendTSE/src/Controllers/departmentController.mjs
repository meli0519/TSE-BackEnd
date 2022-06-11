import {getconnection} from '../DataBase/connection.mjs'



export const getDepartaments = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getDepartments]')
        console.log(result.recordset);
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};


export const deleteDepartment = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        await pool.request().query("exec [dbo].[sp_deleteDepartment]'"+id+"'");
        res.sendStatus(204);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    

};

export const addDepartment = async  (req, res) => {
    console.log("entro");
    const {descripcion,id_distrito,id_pais} = req.body;
    console.log(req.body)

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_AddDepartment] '" + descripcion+ "','" + id_distrito+"','"+id_pais+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
 
};

export const getDistrito = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getDistrito]')
       
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};