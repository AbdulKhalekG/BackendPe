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
        ratings.ratingspeli(req,res)
        res.json(response)

    }catch(e){
        console.log(e);
    }

rating.usuario=(req,res)=>{
        try{
            ratings.ratinguser(req,res)
            res.json(response)
        }catch(e){
            console.log(e);
        }
    }
    

rating.createratingpeli=(req,res)=>{
    try{
        ratings.createratingpeli(req,res);
        res.json(response)

    }catch(e){
        console.log(e);
    }
    rating.deleteratingpeli=(req,res)=> {
        try{
            ratings.deleteratingpeli(req,res)
        }catch(e){
            console.log(e)
        }
    }
}
rating.createratinguser=(req,res)=> {
    try{
        ratings.createratinguser(req,res)
        res.json(response)
    }catch(e){
        console.log(e);
    }
}
rating.deleteratinguser=(req,res)=> {
    try{
        ratings.deleteratinguser(req,res)
    }catch(e){
        console.log(e)
    }
}

rating.deleteratingpeli=(req,res)=> {
    try{
        ratings.deleteratingpeli(req,res)
    }catch(e){
        console.log(e)
    }
}

}

module.exports = rating