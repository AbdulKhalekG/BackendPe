const createpeli=require('../database')
const editpeli=require('../database')
const searchidpeli=require('../database')
const searchusernamepeli=require('../database')
const peli={}



//create peli
peli.create=(req,res)=>{
    try{
        createpeli.createpeli(req,res);
        res.send('create peli')
    }catch(e){
        console.log(e)
    }  

}

//edit peli
peli.edit=(req,res)=>{
    try {
        editpeli.editpeli(req,res);
        res.send('edit peli')
    }catch(e){
        console.log(e)
    }

}

//search post id
peli.searchid=(req,res)=> {

    try{
        searchidpeli.searchidpeli(req,res);
        res.send('search peli')
    }catch(e){
        console.log(e)
    }
}

//search usernamepost
peli.searchuserpeli=(req,res)=> {
    try{
        searchusernamepeli.searchusernamepeli(req,res);
        res.send('search peli for username')
    }catch(e){
        console.log(e)
    }

}

module.exports = peli