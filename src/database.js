const { Pool } = require('pg')
const  helpers  = require('./helpers')

const config={
    connectionString: process.env.DATABASE_URL,
    max:500,
    min:100,
    ssl:{rejectUnauthorized:false}
};
//funciones
const pool = new Pool(config);






//funcion create user
const createuser= async (req,res) =>{

    const{ nombre, username, correo,clave} = req.body;
    const passwordencriptado = await helpers.encryptPassword(clave)
    const response = await pool.query('INSERT INTO usuarios (nombre, username, correo,clave) VALUES($1, $2, $3, $4)', [
        nombre, username, correo,passwordencriptado])
    console.log(response);
    res.json(response.rows)
}

//funcion modify user
const modifyuser=async (req,res)=>{

    const{ nombre, username, correo ,clave,id_usuario} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre= $1 username= $2, correo=$3, clave=$4 WHERE id_usuario=$5', [nombre, username, correo,clave,id_usuario])
    console.log(response);
    res.json(response.rows)

}

//funcion searchusername
const searchusername=async(req,res)=>{
    const username = req.params.username
    const response= await pool.query('SELECT * FROM usuarios WHERE username=$1 ', [username])
    console.log(response.rows);
    res.json(response.rows)
}


//funcion searchuserid
const searchuserid=async(req,res)=>{
    const id_usuario =req.params.id_usuario
    const response=await pool.query('SELECT * FROM usuarios WHERE id_usuario=$1', [id_usuario])
    console.log(response.rows);
    res.json(response.rows)
}

//funcion create peli

const createpeli=async (req, res)=> {
    const{tittle,descripcion,fecha, rating, genero, categoria} = req.body
    const response = await pool.query('INSERT INTO peli(tittle, descripcion, fecha, rating, genero, categoria) VALUES($1,$2,$3,$4,$5,$6)',[tittle,descripcion,fecha,rating,genero,categoria])
    console.log(response);
}

const editpeli=async (req,res)=> {
    const{id_peli, tittle, descripcion,fecha, rating, genero, categoria} = req.body
    const response = await pool.query('UPDATE peli SET tittle=$1, descripcion=$2, fecha=$3, rating=$4, genero=$5, categoria=$6 WHERE id_peli=$7',[id_peli, tittle,descripcion,fecha,rating,genero,categoria])
    console.log(response);
}

//funcion peli id
const searchidpeli=async(req,res)=>{
    const id_peli =req.params.id_peli
    const response=await pool.query('SELECT *FROM peli WHERE id_peli=$1', [id_peli])
    console.log(response.rows);
}

//funcion peli username
const searchusernamepeli=async(req,res)=>{
    const username=req.params.username
    const response=await pool.query('SELECT* FROM peli WHERE username=$1', [username])
    console.log(response.rows);

    }

    //funcion likepost por posts
const ratingspeli=async(req,res)=> {
    const id_rating=req.params.id_rating
    const response=await pool.query('SELECT* FROM rating WHERE id_rating=$1', [id_rating])
    console.log(response.rowCount);

}

const ratingsuser=async(req,res)=> {
    const id_usuario=req.params.id_usuario
    const response=await pool.query('SELECT * FROM rating WHERE id_usuario ', [id_usuario])
    console.log(response.rowCount)
}

const createratingpeli=async(req,res)=> {
    const{id_rating,id_peli} = req.body
    const response = await pool.query('INSERT INTO rating(id_rating,id_peli) VALUES($1,$2)', [id_rating,id_peli])
    console.log(response)
}

const createratinguser=async(req,res)=> {
    const{id_rating,id_usuario} = req.body
    const response = await pool.query('INSERT INTO rating(id_rating,id_usuario VALUES($1,$2)', [id_rating,id_usuario])
    console.log(response);
}

const deleteratinguser=async(req,res)=>{
    const id_usuario=req.params.id_usuario
    const response= await pool.query('DELETE * FROM rating WHERE id_usuario=$1',[id_usuario])
    console.log(response)
    res.json(response.rows);

}

const deleteratingpeli=async(req,res)=>{
    const id_peli =req.params.id_peli
    const response= await pool.query('DELETE * FROM rating WHERE id_peli=$1', [id_peli])
    console.log(response)
    res.json(response.rows);

}
module.exports = {
    createuser,
    modifyuser,
    searchuserid,
    searchusername,
    createpeli,
    editpeli,
    searchidpeli,
    searchusernamepeli,
    ratingspeli,
    ratingsuser,
    createratingpeli,
    createratinguser,
    deleteratinguser,
    deleteratingpeli


}