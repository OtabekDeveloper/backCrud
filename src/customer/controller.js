const Customer = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let customer = await Customer.create(req.body)
            if(!customer){
                return res.status(400).send("Haridor qoshishda hatolik boldi")
            }
            return res.status(201).send(customer)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let customers = await Customer.find({})
           if(!customers){
            return res.status(400).send("Haridorni olishda hatolik boldi ")
            }
        return res.status(200).send(customers)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let customerId = req.params.id
           let customer = await Customer.findOne({_id : customerId})
           if(!customer){
            return res.status(400).send("Haridorni olishda hatolik boldi ")
            }
        return res.status(200).send(customer)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let customerId = req.params.id
        let customer = await Customer.findByIdAndDelete(customerId)           
        return res.status(200).send(customer)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let customerId = req.params.id
        await Customer.findByIdAndUpdate(customerId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}