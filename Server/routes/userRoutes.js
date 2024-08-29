const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });

        if (userExists) {
            res.send({
                success: false,
                message: "User already exists"
            });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = await User(req.body);
        await newUser.save();

        res.send({
            success: true,
            message: "user created successfully"
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: err
        })
    }
})


module.exports = router;