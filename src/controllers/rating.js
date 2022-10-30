const ratingspeli = require('../database')
const ratinguser = require('../database')
const createratingpeli = require('../database')
const createratinguser = require('../database')
const deleteratingpeli = require('../database')
const deleteratinguser = require('../database')
const {response} = require('express')
const ratings=require('../database')

const rating={}

rating.peli=(req,res)=>{
    try{
        ratingspeli.ratingspeli(req,res)
        res.json(response)

    }catch(e){
        console.log(e);
    }
}

rating.usuario=(req,res)=>{
        try{
            ratinguser.ratinguser(req,res)
            res.json(response)
        }catch(e){
            console.log(e);
        }
    }
    
    

rating.createratingpeli=(req,res)=>{
    try{
        createratingpeli.createratingpeli(req,res);
        res.json(response)

    }catch(e){
        console.log(e);
    }
}

    rating.deleteratingpeli=(req,res)=> {
        try{
            deleteratingpeli.deleteratingpeli(req,res)
        }catch(e){
            console.log(e)
        }
    }

rating.createratinguser=(req,res)=> {
    try{
        createratinguser.createratinguser(req,res)
        res.json(response)
    }catch(e){
        console.log(e);
    }
}
rating.deleteratinguser=(req,res)=> {
    try{
        deleteratinguser.deleteratinguser(req,res)
    }catch(e){
        console.log(e)
    }
}

rating.deleteratingpeli=(req,res)=> {
    try{
        deleteratingpeli.deleteratingpeli(req,res)
    }catch(e){
        console.log(e)
    }
}




module.exports = rating