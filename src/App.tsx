import { CostumersForm } from './components/CostumersForm'
import Navbar from './components/Navbar'

const App = (): JSX.Element => {
	return (
		<div>
			<Navbar />
			<main className='bg-gradient-to-r from-blue-400 to-blue-100 via-blue-50 from-blue-100 to-blue-400 h-screen md:w-screen'>
				<CostumersForm />
			</main>
		</div>
	)
}

export default App
