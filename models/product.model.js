const { Schema, model, mongo, default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:String,
    image :{ type: String, default: null },
    categoryId : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'category',
    },
    subCategoryId : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'sub-category',
    },
    extraCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'extra-category',
    }
})

const Product = mongoose.model('product',productSchema)

module.exports = Product