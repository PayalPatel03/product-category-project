const { Router } = require("express");
const extraCatCtl = require('../controllers/extraCategory.controller')
const extraCatRouter = Router()

extraCatRouter.get('/create',extraCatCtl.create)
extraCatRouter.get('/view',extraCatCtl.view)
extraCatRouter.get('/delete/:id',extraCatCtl.delete)
extraCatRouter.get('/edit/:id',extraCatCtl.editExtraCategory)

extraCatRouter.post('/create',extraCatCtl.createData)
extraCatRouter.post('/update/:id',extraCatCtl.updateExtraCategory)


module.exports = extraCatRouter
