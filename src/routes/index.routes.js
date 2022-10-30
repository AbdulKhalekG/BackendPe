const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const peli = require('../controllers/peli')
const rating = require('../controllers/rating')
const passport=require('passport')
const { passportAuth } = require('../middleware')




//Rutas para los users
router.post('/register', usuario.register) //
router.post('/login', passportAuth) //
router.put('/modify/:id', usuario.modify) //

//busqueda de usuarios por id
router.get('/search-user/:id_usuario',usuario.searchiduser) //

//busqueda de username
router.get('/search-username/:username',usuario.searchuser) //

//peli

router.post('/create-peli', peli.create) //
router.put('/edit-peli',peli.edit) //
//busqueda de peli por id
router.get('/search-peli/:id_post',peli.searchid)

//busqueda de peli por username
router.get('/search-usernamepeli/:username', peli.searchuserpeli)

//rutas rating
router.get('/rating-peli/:id_peli',rating.peli)
router.get('/rating-user/:id_usuario',rating.usuario)
router.post('/createrating-peli',rating.createratingpeli)
router.post('/createrating-user',rating.createratinguser)
router.delete('/deleterating-user/:id_usuario',rating.deleteratinguser)
router.delete('/deleterating-peli/:id_post',rating.deleteratingpeli)








router.get('/perfil',(req,res)=>{
    res.send('perfil')
})


module.exports = router