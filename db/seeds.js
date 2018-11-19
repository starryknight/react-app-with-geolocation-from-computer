const Creature = require ('../models/Creature')
const mongoose = require('./connections')

const luke = new Creature({
    name: 'Luke', 
    description: '../client/public/dispossessory.pdf'
})
const darth = new Creature({
    name: 'Darth Vader', 
    description: 'Father of Luke'
})

Creature.deleteMany({})
.then(()=>luke.save())
.then(()=>darth.save())
.then(() => console.log('Successful Saved Seeds'))
    .then(() => mongoose.connection.close())