import {getconnection} from '../DataBase/connection.mjs'

export const getUsuarios = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[getAllUsuarios]')
        res.json(result.recordset)
        console.log(res);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }

};

export const addUsuario = async  (req, res) => {
    console.log("entro");
    const {nombre, apellidos, id_sexo, cedula,fechaNacimiento,  
        id_departamento, correo, celular, id_distrito,
        pasword, foto
    } = req.body;
    console.log(req.body)

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[addUsuario] '" + nombre+ "','" + apellidos+"','"+
        id_sexo +"','"+ cedula+"','"+ fechaNacimiento+"','"+ id_departamento+"','" +correo+"','"+ 
        celular+"','"+ id_distrito+"','"+ pasword+"','"+foto+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
}; 

 export const deleteUsuario = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[deleteUsuario]'"+id+"'");
        res.sendStatus(204);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    

}; 

 export const getUsuarioById = async (req, res) => {
    
    const {id} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[getUsuario]'"+id+"'");
        res.send(result.recordset[0]);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
}; 


 export const updateUsuario = async  (req, res) => {
    const {id,nombre, apellidos, id_sexo, cedula,fechaNacimiento,  
        id_departamento, correo, celular, id_distrito,
        pasword, foto} = req.body;
    console.log(req.body);
    try {
        const pool = await getconnection();

        await pool.request().query( "exec  [dbo].[updateUsuario] '" +id+"','"+ nombre+ "','" + apellidos+"','"+
        id_sexo +"','"+ cedula+"','"+ fechaNacimiento+"','"+ id_departamento+"','" +correo+"','"+ 
        celular+"','"+ id_distrito+"','"+ pasword+"','"+foto+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        
        res.status(500);

        res.send(error.message);
        
    }
 
}; 