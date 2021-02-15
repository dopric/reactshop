import express from 'express'

import products from './data/products.js'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import UserModel from './models/user.js'

const confResult = dotenv.config()
if (confResult.error) {
	throw confResult.error
}
const PORT = process.env.PORT || 5000

const user = UserModel()
user.name = 'dragan Opric'
user.isAdmin = true
console.log('User')
console.log(user)

const app = express()
connectDb()

app.get('/', (req, res) => {
	res.send('API is running')
})

app.get('/api/products', (req, res) => {
	res.json(products)
})

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id)
	res.json(product)
})

app.listen(PORT, function() {
	console.log('server is running in ' + process.env.NODE_ENV + ' mode and is listening on port ' + PORT)
})
