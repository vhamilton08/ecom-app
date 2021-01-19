require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {SESSION_SECRET, CONNECTION_STRING} = process.env.PORT || process.env
const SERVER_PORT = process.env.PORT || process.env
const authCtrl = require('./controllers/AuthController');
const ProductCtrl = require('./controllers/ProductController.js');
const cartCtrl = require('./controllers/CartController');

const app = express()

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30
        }
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set('db', db)
    console.log('Db is online')
}).catch(err => console.log(`Database error: ${err}`))

//auth endpoints
app.get('/auth/user', authCtrl.getUser)
app.post('/auth/register/', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
//product endpoints
app.get('/api/products', ProductCtrl.getProducts)

//cart endpoints
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.delete('/api/cart/:product_id', cartCtrl.deleteFromCart)
// app.put('/api/cart', cartCtrl.editCart)


app.listen(SERVER_PORT, () => console.log('<---Server Online--->'));