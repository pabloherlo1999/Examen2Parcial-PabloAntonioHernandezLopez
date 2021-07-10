const mongoose=require('mongoose');

const SabritasSchema = new mongoose.Schema({
    Codigo:{
        type:String,
        required:true
    },
    Nombre:{
        type:String,
        required:true
    },
    Gramos:{
        type:String,
        default:5
    },
    Precio:{
        type:String,
        required: true
    },

    Fecha:{
        type:Date,
        required: true
    }
})

const Sabrita = mongoose.model('Sabritas', SabritasSchema);

module.exports = Sabrita;
