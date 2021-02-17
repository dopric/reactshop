import mongoose from 'mongoose'

const connectDb = async () => {
	try {
		console.log('trying to connect to the database')
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true
		})

		console.log('Connected to the database ' + conn.connection.host)
	} catch (err) {
		console.log('Failed to connect to the database ' + err.message)
		process.exit(1)
	}
}

export default connectDb
