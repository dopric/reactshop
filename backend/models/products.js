import mongoose from 'mongoose'

const productsSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
		name: { type: String, required: true },
		image: { type: String },
		description: String,
		brand: String,
		category: { type: String, required: true },
		price: { type: Number, required: true, default: 0 },
		countInStock: { type: Number, required: true, default: 0 },
		rating: { type: Number, default: 0 },
		numReviews: { type: Number, default: 0 }
	},
	{
		timestamps: true
	}
)

const Product = mongoose.model('Product', productsSchema)
export default Product
