const bcrypt = require('bcrypt')

module.exports = {
    getUser: (req, res) => {
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    },
    
    register: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        let foundUser = await db.users.getUser([username])
            if(foundUser[0]) {
                res.status(409).send('username is taken')
            } else {
                const salt = bcrypt.genSaltSync(15)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await db.users.addUser([username, hash])
                req.session.user = newUser[0]
                res.status(201).send(newUser[0])
            }
    },

    login: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        let foundUser = await db.users.getUser([username])
         foundUser = foundUser[0]
            if(foundUser) {
                const compareHash = foundUser.password
                const authenticated = bcrypt.compareSync(password, compareHash)
                if(authenticated) {
                    delete foundUser.password
                    req.session.user = foundUser
                    res.status(202).send(foundUser)
                } else {
                    res.status(401).send('Incorrect username or password')
                } 
            } else {
                res.status(401). send('Incorrect username or password')
            }
    },

    logout: async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}