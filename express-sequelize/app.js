const express = require('express');
const { User } = require('./sequelize');
const app = express();
const validator = require('express-joi-validation').createValidator({})

app.get('/',async(req,res) => {
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980,6,20)
    });
    res.json(jane);
});

const querySchema = Joi.object({
    name: Joi.string().required()
})
  

app.listen(3000, () => {
    console.log('App is listening on http://localhost:3000');
});