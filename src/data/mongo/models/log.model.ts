import mongoose from "mongoose";


/// modelo de la tabla de mongo

const logScheme = new mongoose.Schema({
    
    message: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
    },
    level: {
        type: String,
        enum: ['low','high','medium'],
        default: 'low'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})


export const LogModel= mongoose.model('Log',logScheme)