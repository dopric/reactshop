import Header from './components/Header'
import Footer from './components/Footer'
import './bootstrap.min.css' // https://bootswatch.com/
import './index.css'
import Container from 'react-bootstrap/Container'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Container>
					<main className='py-3'>
						<Route path='/' component={Home} exact />
						<Route path='/product/:id' component={ProductDetail} />
					</main>
				</Container>
				<Footer />
			</Router>
		</div>
	)
}

export default App
