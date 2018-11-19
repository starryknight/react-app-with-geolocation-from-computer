const Creature = require('../models/Creature')

const creatureController = {
    index: (req,res)=>{
        Creature.find({})
        .then((creatures)=>{
            res.send (creatures)
        })
    },
    show: (req,res)=>{
       Creature.findById(req.params.creatureId)
       .then((creature)=>{
           res.send(creature)
       })
    },
    update: (req,res)=>{
        Creature.findByIdAndUpdate(req.params.creatureId, req.body, {new:true})
        .then((updatedCreature)=>{
            updatedCreature.save()
            res.send(updatedCreature)
        })
    },
    delete: (req,res)=>{
        Creature.findByIdAndDelete(req.params.creatureId)
        .then(()=>{
            res.send('deleted successfully')
        })
    },
    create: (req,res)=>{
        Creature.create(req.body)
        .then((creature)=>{
            res.send(creature)
        })
    }

}

module.exports = creatureController