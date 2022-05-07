const express = require("express");
const router=new express.Router();
const MenRanking=require("../models/mens")

router.post("/mens",async(req,res)=>{
    try{
        const addingMensRecords=new MenRanking({...req.body})
        console.log(req.body)
        const insertMens= await addingMensRecords.save();    //returning promise
        res.status(201).send(insertMens)
    }catch(e){
            res.status(400).send(e)
    }
})


router.get("/mens",async(req,res)=>{
    try{
        const getMens=await  MenRanking.find({}).sort({"ranking":1})
        res.status(201).send(getMens)
    }catch(e){
            res.status(400).send(e)
    }
})

///request for individual
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await  MenRanking.findById({_id:_id})
        res.status(201).send(getMen)
    }catch(e){
            res.status(400).send(e)
    }
})


router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await  MenRanking.findByIdAndUpdate({_id:_id},req.body,{new:true})
        res.status(201).send(getMen)
    }catch(e){
            res.status(500).send(e)
    }
})


router.delete("/mens/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const getMen=await  MenRanking.findByIdAndDelete({_id:id})
        res.status(201).send(getMen)
    }catch(e){
            res.status(500).send(e)
    }
})

module.exports=router;