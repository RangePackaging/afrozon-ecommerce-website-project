const express = require('express');
const User = require('./user.model');
const router = express.Router();




//Register endpoint

router.post("/register", async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = new User({email, username, password});
        await user.save();
        res.status(201).send({message: 'user registration successfully!'})
    }
    catch (error) { }
});

module.exports = router;