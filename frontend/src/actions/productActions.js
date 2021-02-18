import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
	try {
		console.log('DISPATCH REQUEST')
		dispatch({ type: PRODUCT_LIST_REQUEST })
		const { data } = await axios.get('/api/products')
		console.log('DISPATCH DATA')
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data
		})
	} catch (err) {
		console.log('DISPATCH ERROR')
		dispatch({
			type: PRODUCT_LIST_FAIL,
			error: err.response && err.response.data.message ? err.response.data.message : err.message
		})
	}
}
