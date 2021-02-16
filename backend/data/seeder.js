import dotenv from 'dotenv'
import users from './users.js'
import products from './products.js'
import UserModel from '../models/user.js'
import ProductModel from '../models/products.js'
import OrderModel from '../models/orders.js'
import mongoose from 'mongoose'
import connectDb from '../config/db.js'

dotenv.config()
const conn = async () => {
	await connectDb()
}

conn()

const seed = async () => {
	try {
		console.log('Seed.........')
		await destroyData(false)
		const createdUsers = await UserModel.insertMany(users)
		const adminUserId = createdUsers[0]._id
		const productsToCreate = products.map((product) => {
			return { ...product, user: adminUserId }
		})
		const createdProducts = await ProductModel.insertMany(productsToCreate)
		console.log(
			`Seed executed successfully, created users: ${createdUsers.length} created products: ${createdUsers.length}`
		)
		console.log(createdProducts)
		process.exit()
	} catch (err) {
		console.log(`Some erropr occured while trying to seed data: ${err}`)
		process.exit(1)
	}
}

const destroyData = async (exitOnEnd = true) => {
	try {
		console.log('Destroying data')
		await UserModel.deleteMany()
		await ProductModel.deleteMany()
		await OrderModel.deleteMany()

		console.log('Data destroyed successfully')
		if (exitOnEnd) {
			process.exit()
		}
	} catch (err) {
		console.log(`Unable to destroy data: ${err}`)
		process.exit(1)
	}
}
if (process.argv[2] === '-d') {
	destroyData()
} else {
	seed()
}
