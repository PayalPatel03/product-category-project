const { Schema, model, mongo, default: mongoose } = require("mongoose");

const extraCategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    }
})

const ExtraCategory = mongoose.model('extra-category',extraCategorySchema)

module.exports = ExtraCategory