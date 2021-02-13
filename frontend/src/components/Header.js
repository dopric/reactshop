import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>React-Proshop</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='/cart'>
								<i className='fas fa-shopping-cart mr-1' /> Cart
							</Nav.Link>
							<Nav.Link href='/login'>
								<i className='fas fa-user mr-1' />Sign in
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
