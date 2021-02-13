import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductDetail = (props) => {
	const product = products.find((e) => e._id === props.match.params.id)
	return (
		<>
		<Link className='btn btn-dark my-3' to='/'>
			Go back
		</Link>
		<Row>
			<Col md={6}>
				<Image src={product.image} alt={product.name} fluid></Image>
			</Col>
			<Col md={3}>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<h3>{product.name}</h3>
					</ListGroup.Item>
					<ListGroup.Item>
						<Rating product={product}></Rating>
					</ListGroup.Item>
					<ListGroup.Item>
						Price: ${product.price}
					</ListGroup.Item>
					<ListGroup.Item>
						Description: {product.description}
					</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col md={3}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<Row>
								<Col>
									Price:
								</Col>
								<Col>
								<strong>{product.price}</strong>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>
									Status:
								</Col>
								<Col>
								{product.countInStock > 0 ? 'In stock': 'Out of stock'}
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Button className="btn-block" type="button" disabled={product.countInStock === 0}>
								Add to cart
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
		</>
	)
}

export default ProductDetail
