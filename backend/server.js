import express from 'express'

import dotenv from 'dotenv'
import connectDb from './config/db.js'

import { notFound, errorHandler } from './middlewares/errorHandler.js'
import indexRoutes from './routes/indexRoutes.js'
import productRoutes from './routes/productRoutes.js'

const confResult = dotenv.config()
if (confResult.error) {
	throw confResult.error
}
const PORT = process.env.PORT || 5000

const connect = async () => {
	await connectDb()
}
connect()
const app = express()

app.use('/api/products', productRoutes)
app.use('/', indexRoutes)

// add error handler middleware
app.use(errorHandler)
app.use(notFound)

app.listen(PORT, function() {
	console.log('server is running in ' + process.env.NODE_ENV + ' mode and is listening on port ' + PORT)
})
