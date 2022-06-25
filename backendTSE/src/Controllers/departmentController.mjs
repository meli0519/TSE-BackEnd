import {getconnection} from '../DataBase/connection.mjs'



export const getDepartaments = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[sp_getDepartments]')
      
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


export const updateDepartment = async  (req, res) => {
    
    const {id_departamento,descripcion,id_distrito,id_pais} = req.body;
    console.log(req.body)

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[sp_UpdateDepartment] '"+id_departamento+ "','"+ descripcion+ "','" + id_distrito+"','"+id_pais+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
 
};

export const getDistrito = async (req, res) => {
    
    const {id} = req.params;
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getDistrito]'"+id+"'")
       
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};


export const getCantones = async (req, res) => {
   
    const {id} = req.params;
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getCantones]'"+id+"'")
       console.log(result.recordset);
        res.json(result.recordset)
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};


export const getDepartmentForId = async (req, res) => {
    
    const {id} = req.params;
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[sp_getDepartmentForId]'"+id+"'")
       
        res.json(result.recordset[0])
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
       
    }

};