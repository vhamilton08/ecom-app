module.exports = {
    getCart: async (req, res) => {
        const {user_id} = req.session.user
        if(!req.session.user.user_id) {
            return res.status(400)
        }
        const db = req.app.get('db')
        const cart = await db.cart.getCart(user_id)
        if(cart[0]) {
            return res.status(200).send(cart)
        } else {
            return res.status(500)
        }
    },

    addToCart: async (req, res, next) => {
        if(!req.session.user || !req.session.user.user_id) {
            return res.status(400)
        }
        const db = req.app.get('db')
        let {product_id} = req.body
        let {user_id} = req.session.user

        try {
            let cart = await db.cart.addToCart([user_id, product_id])
            return res.status(200).send(cart)
        } catch (error) {
            console.log('error in addToCart', error)
            next(error)
            return res.sendStatus(500)
        }
    },

    deleteFromCart: async (req, res) => {
        const {user_id} = req.session.user
        const {product_id} = req.params
        const db = req.app.get('db')
        const deleteFrom = await db.cart.deleteFromCart([user_id, product_id])
        return res.status(200).send(deleteFrom)
    },
    // editCart: async (req, res) => {

    // }
}