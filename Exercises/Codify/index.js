const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const app = express();
const port = 3001;

// create a new database and table
const db = new sqlite3.Database('tickets.db');
db.run('CREATE TABLE IF NOT EXISTS tickets (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, topic TEXT, description TEXT, status TEXT)');
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT)');

// initialize the session
app.use(session({
    secret: 'G3U9SHG29S872HA028DH278D9178D90A782GH',
    resave: false,
    saveUninitialized: true
}));

// redirect to login if not logged in, else to tickets
app.get('/', (req, res) => {
    try {
        if (req.session.userId) {
            res.sendStatus(200);
            res.redirect('/tickets');
            return;
        } else {
            res.redirect('/login');
            return;
        }

    } catch (e) {
        res.redirect('/login');
        return;
    }

});

// endpoint to show the login form
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/templates/login.html');
});


// endpoint to show the ticket list
app.get('/tickets', (req, res) => {
    if (!req.session.userId) {
        res.sendStatus(401);
        return;
    }

    res.sendFile(__dirname + '/templates/tickets.html');
});

app.get('/submit_ticket', function(req, res) {
    res.sendFile(__dirname + '/templates/ticket.html');
});


// endpoint to handle the login form submission
app.post('/login', (req, res) => {
    // read the data from the request body
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        const formData = new URLSearchParams(data);
        const username = formData.get('username');
        const password = formData.get('password');

        db.get('SELECT id, username, password FROM users WHERE username = ?', [username], (err, row) => {
            if (err) {
                console.error(err.message);
                res.sendStatus(500);
                return;
            }

            if (!row) {
                res.sendStatus(401);
                return;
            }

            // check the password hash
            bcrypt.compare(password, row.password, (err, result) => {
                if (err) {
                    console.error(err.message);
                    res.sendStatus(500);
                    return;
                }

                if (!result) {
                    res.sendStatus(401);
                    return;
                }

                // store the user ID in the session
                req.session.userId = row.id;

                res.redirect('/tickets');
            });
        });
    });
});

// endpoint to submit a ticket
app.post('/submit_ticket', (req, res) => {
    // read the data from the request body
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        const formData = new URLSearchParams(data);
        const name = formData.get('name');
        const topic = formData.get('topic');
        const description = formData.get('description');

        // insert the data into the database
        const stmt = db.prepare('INSERT INTO tickets (name, topic, description, status) VALUES (?, ?, ?, ?)');
        stmt.run(name, topic, description, "open", err => {
            if (err) {
                console.error(err.message);
                res.sendStatus(500);
            } else {
                res.send('Ticket created successfully.');
            }
        });
    });
});

// endpoint to show the ticket list in json
app.get('/api/tickets', (req, res) => {
    if (!req.session.userId) {
        res.sendStatus(401);
        return;
    }

    // look up the tickets in the database
    db.all('SELECT id, name, topic, description, status FROM tickets', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.sendStatus(500);
            return;
        }

        res.send(rows);
    });
});

// endpoint to log out
app.post('/logout', (req, res) => {
    delete req.session.userId;
    res.redirect('/');
});
// start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});