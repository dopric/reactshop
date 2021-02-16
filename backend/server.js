import express from 'express'

import dotenv from 'dotenv'
import connectDb from './config/db.js'
import UserModel from './models/user.js'
import ProductModel from './models/products.js'

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
const connect = async () => {
	await connectDb()
}
connect()

app.get('/', (req, res) => {
	res.send('API is running')
})

app.get('/api/products', (req, res) => {
	ProductModel.find(function(err, products) {
		if (err) {
			console.log('errors occured')
		} else {
			console.log('Count products ', products.length)
			res.json(products)
		}
	})
})

app.get('/api/products/:id', (req, res) => {
	// const product = products.find((p) => p._id === req.params.id)
	ProductModel.findById(req.params.id, function(err, product) {
		if (err) {
			console.log('Unable to find product', err)
		} else {
			console.log('product found by id')
			res.json(product)
		}
	})
})

app.listen(PORT, function() {
	console.log('server is running in ' + process.env.NODE_ENV + ' mode and is listening on port ' + PORT)
})
