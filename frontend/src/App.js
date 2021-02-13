import Header from './components/Header'
import Footer from './components/Footer'
import './bootstrap.min.css' // https://bootswatch.com/
import './index.css'
import Container from 'react-bootstrap/Container'
import Home from './pages/Home'

const App = () => {
	return (
		<div>
			<Header />
			<Container>
				<main className='py-3'>
					<Home />
				</main>
			</Container>
			<Footer />
		</div>
	)
}

export default App
