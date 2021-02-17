// import dotnet from 'dotenv'
// dotnev.config()

const errorHandler = (err, req, res, next) => {
	console.log('error handler')

	const statusCode = req.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack
	})
}

const notFound = (req, res, next) => {
	console.log('not found ' + req.params)
	const error = new Error(`Not Found - ${req.originalUrl}`)
	res.status(404)
	next(error)
}

export { notFound, errorHandler }
