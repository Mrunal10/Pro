

const mongoose= require("mongoose");

const PersonalInformationdataSchema = new mongoose.Schema({
    flynumber:{
        type:String,
        require:true
    },
    firstname:{
        type:String,
        require:true
    },
    middlename:{
        type:String,
    
    },
    lastname:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
   email:{
        type:String,
        require:true
    },
    addressline1:{
        type:String,
        require:true
    },
    addressline2:{
        type:String,
       
    },
    city:{
        type:String,
        require:true
    },
    postal:{
        type:String,
        require:true
    },
    addfeedback:{
        type:String,
        require:true
    },
    selected:{
        type:String,
        require:true
    },
    phonecountry:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    confirmationnumber:{
        type:String,
        require:true
    },
    ticket:{
        type:String,
        require:true
    },
    adddetails:{
        type:String,
        require:true
    },
    topping:{
        type:String,
        require:true

    }
})

const PersonalInformationdata = mongoose.model("PersonalInformationdata", PersonalInformationdataSchema);
module.exports = PersonalInformationdata;