import React from 'react'

const Rating = (props) => {
	const product = props.product
	const rating = product.rating
	return (
		<div className='my-3 rating'>
			<span>
				<i className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
			</span>
			<span>
				<i className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
			</span>
			<span>
				<i className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
			</span>
			<span>
				<i className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
			</span>
			<span>
				<i className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
			</span>
			<div style={{ color: 'black', 'margin-left': '2px' }}>
				{product.numReviews > 0 && ` ${product.numReviews} reviews `}
			</div>
		</div>
	)
}

export default Rating
