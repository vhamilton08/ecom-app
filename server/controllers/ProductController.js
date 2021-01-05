module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db')

        let products = await db.products.getProducts()
        res.status(200).send(products)
    }
 }