const ExtraCategory = require("../models/subcategory.model")

exports.create = (req,res)=>{
    res.render('pages/extra-category')
}

exports.createData = async (req,res)=>{
    try {
        await ExtraCategory.create(req.body)
        console.log("Extra-Category created...")
        res.redirect(req.get('Referrer')||'/')
    } catch (error) {
        console.log(error.message)
        res.redirect(req.get('Referrer')||'/')
    }
}

exports.view = async (req,res)=>{
    try {
        let extracategory = await ExtraCategory.find({})
        res.render('pages/view-extra-category',{extracategory})
    } catch (error) {
        console.log(error.message)
        res.render('pages/view-extra-category',{extracategory : []})
    }
}

exports.delete = async (req,res)=>{
    try {
        let {id} = req.params
        await ExtraCategory.findByIdAndDelete(id)
        res.redirect(req.get('Referrer')||'/')
    } catch (error) {
        console.log(error.message)
        res.redirect(req.get('Referrer')||'/')
    }
}

exports.editExtraCategory = async (req,res)=>{
    try {
        let {id} = req.params
        let extraCategory = await ExtraCategory.findById(id)
        res.render('pages/editExtraCategory',{extraCategory})
    } catch (error) {
        console.log(error.message)
        res.render('pages/editExtraCategory',{extraCategory : []})
    }
}

exports.updateExtraCategory = async (req,res)=>{
    try {
        let {id} = req.params
        await ExtraCategory.findByIdAndUpdate(id,req.body,{new : true})
        res.redirect('/etracategory/view')
    } catch (error) {
        console.log(error.message)
        res.redirect('/extracategory/view')
    }
}