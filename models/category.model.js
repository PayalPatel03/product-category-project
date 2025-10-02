const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:String,
    image :{ type: String, default: null },
})

const Category = mongoose.model('category',categorySchema)

module.exports = Category
