const express = require('express'); //Import express module
const router = express.Router(); //Calling top-level express function
const path = require('path');
const fs = require('fs');

// Define the users array
const users = [
    { "username": 'andrew', "birthdate": '1997-13-05', "age": 26, "email": 'andrew@.com', "upwd": 'andrew' },
    { "username": 'jim', "birthdate": '2000-01-01', "age": 23, "email": 'jim@.com', "upwd": 'jim' },
    { "username": 'fred', "birthdate": '2000-02-02', "age": 22, "email": 'fred@.com', "upwd": 'fred' }
];

router.post('/', function (req, res) {

    var user = {};
    user.username = req.body.username;
    user.valid = false;

    for (let i = 0; i < users.length; i++) {
        console.log(users);
        if (user.username == users[i].username) {
            user = { 'username': users[i].username, 'email': users[i].email, 'birthdate': users[i].birthdate, 'age': users[i].age, 'valid': true };
            console.log(user);
        }
    }
    res.send(user);
});

module.exports = router