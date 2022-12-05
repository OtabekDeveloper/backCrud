const Category = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let user = await Category.create(req.body)
            if(!user){
                return res.status(400).send("Categorys not found")
            }
            return res.status(201).send(user)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let categorys = await Category.find({})
           if(!categorys){
            return res.status(400).send("Failed to get Categorys ")
            }
        return res.status(200).send(categorys)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let categoryId = req.params.id
           let category = await User.findOne({_id : categoryId})
           if(!category){
            return res.status(400).send("Userlarni olishda hatolik boldi ")
            }
        return res.status(200).send(user)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let categoryId = req.params.id
        let category = await Category.findByIdAndDelete(categoryId)           
        return res.status(200).send(category)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let categoryId = req.params.id
        await Category.findByIdAndUpdate(categoryId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}