import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
	total_amout: { type: Number, required: true, default: 0 },
	items: [
		{
			product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
			quantity: { type: Number, required: true },
			price: { type: Number, required: true }
		}
	],
	paymentInfo: {
		id: String,
		email: String,
		dateTime: String,
		paid: { type: Boolean, default: false }
	},
	status: { type: String, required: true, default: 'IN PROCESS' }
})

const OrderModel = mongoose.model('Order', orderSchema)

export default OrderModel
