import mongoose from "mongoose";

const { Schema } = mongoose;

const User = new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        
    }
})