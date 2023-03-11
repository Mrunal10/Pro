const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app=express();

const DataModel = require("./models/PersonalInformationdata")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://mrunalpatil902168:Mrunal10@ac-zuasabg-shard-00-00.welcutk.mongodb.net:27017,ac-zuasabg-shard-00-01.welcutk.mongodb.net:27017,ac-zuasabg-shard-00-02.welcutk.mongodb.net:27017/?ssl=true&replicaSet=atlas-dlemvf-shard-0&authSource=admin&retryWrites=true&w=majority", 
{
 useNewUrlParser:true
})


app.post("/insert" , async(req , res) =>{
    const flynumber=req.body.flynumber
    const firstname = req.body.firstname
    const middlename=req.body.middlename
    const lastname = req.body.lastname
    const phonenumber =req.body.phonenumber
    const email = req.body.email
    const addressline1= req.body.addressline1
    const addressline2 =req.body.addressline2
    const city=req.body.city
    const postal=req.body.postal
    const addfeedback=req.body.addfeedback
     const selected = req.body.selected
     const phonecountry = req.body.phonecountry
     const country = req.body.country
     const confirmationnumber = req.body.confirm
     const ticket = req.body.ticket
     const adddetails = req.body.adddetails
     const topping=req.body.topping


    const data = new DataModel(
        
        {
            flynumber:flynumber,
            firstname:firstname , 
            middlename:middlename,
             lastname:lastname,
             phonenumber:phonenumber,
             email:email,
             addressline1:addressline1,
             addressline2:addressline2,
             city:city,
             postal:postal,
             addfeedback:addfeedback,
              selected:selected,
              phonecountry:phonecountry,
              country:country,
              confirmationnumber:confirmationnumber,
              ticket:ticket,
              adddetails:adddetails,
              topping:topping

            
            });

    try {
        const result = await DataModel.collection.insertOne(data);
        
         res.send(result);
        // console.log("data" + data)
        // return data._id;
    } catch (error) {
        console.log(error);
        
    }
})


app.get("/read" ,async(req,res) =>{
    console.log(req.query.feedbackId)
    DataModel.findOne({}, (err,result) =>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
})




app.listen(3001, ()=>{
    console.log("server running on port 3001");
})