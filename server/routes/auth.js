module.exports = function (app) {
    // Route to manage user login
    app.post('/api/auth', function (req, res) {
        let users = [
            { "username": 'andrew', "birthdate": '1997-13-05', "age": 26, "email": 'andrew@.com', "password": 'andrew' },
            { "username": 'jim', "birthdate": '2000-01-01', "age": 23, "email": 'jim@.com', "password": 'jim' },
            { "username": 'fred', "birthdate": '2000-02-02', "age": 22, "email": 'fred@.com', "password": 'fred' }];

        if (!req.body) {
            return res.sendStatus(400)
        }

        var user = {};

        user.valid = false;
        user.email = '';
        user.username = '';

        for (let i = 0; i < users.length; i++) {
            if (req.body.username == users[i].username && req.body.upwd == users[i].pwd) {
                userString = JSON.stringify({
                    valid: true,
                    username: users[i].username,
                    birthdate: users[i].birthdate,
                    age: users[i].age,
                    email: users[i].email,
                });
                // Store user details in session storage
                req.session.user = userString;
            }
        }

        res.send(user);
    });

}