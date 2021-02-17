import express from 'express'
import asyncHandler from 'express-async-handler'
import ProductModel from '../models/products.js'

const router = express.Router()

router.get(
	'/',
	asyncHandler(async (req, res) => {
		console.log('Getting products -> from router')
		const products = await ProductModel.find({})
		res.json(products)
	})
)

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		console.log('trying to get product by id ' + req.params.id)
		// const product = products.find((p) => p._id === req.params.id)
		const product = await ProductModel.findById(req.params.id)
		if (product) {
			console.log('product found')
			res.json(product)
		} else {
			console.log('product not found')
			res.status(404).json({ message: 'Product not found' })
		}
	})
)

export default router
