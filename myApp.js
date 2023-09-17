require('dotenv').config();
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods : { type: [String] }
})

let Person = mongoose.model('Person', personSchema)

const arrayOfPeople = [
  {
    name: 'Dedaldino',
    age: 24,
    favoriteFoods: ['banana', 'Mango', 'apple']
  },
  {
    name: 'Ana',
    age: 14,
    favoriteFoods: ['stawaberry', 'Mango', 'apple']
  },
  {
    name: 'João',
    age: 44,
    favoriteFoods: ['banana', 'Mango', 'apple']
  }
]

const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: Dedaldino,
    age: 24,
    favoriteFoods: ['banana', 'Mango', 'apple']
  })
  newPerson.save((err, data) => {
    if(err) {
      return done(err)
    }
    done(null, data)
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, person) => {
    if (err) return done(err)
    done(null, person)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data) => {
    if (err) return done(err)
    done(null, data)
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, (err, foundPerson) => {
    if (err) return done(err)
    done(null, foundPerson)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger"
  Person.findById({_id: personId}, (err, person) => {
   if (err) return done(err)
    
   person.favoriteFoods.push(foodToAdd);
    
   person.save((err, data) => {
     if (err) return done(err)
     done(null, data)
   })
 })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, { age: ageToSet }, 
    { new: true }, (err, data) => {
    if(err) return done(err)
    done(null, data)
  })
};

const removeById = (personId, done) => {
   Person.findByIdAndRemove ({_id: personId}, (err, deletedPerson) => {
    if(err) return done(err)
    done(null, deletedPerson)
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
