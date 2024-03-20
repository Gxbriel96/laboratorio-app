import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'

/** bg-gradient-to-r from-blue-400 to-blue-100 via-blue-50 from-blue-100 to-blue-400 */
const App = (): JSX.Element => {
	return (
		<div className=''>
			<Navbar />
			<main className='bg-gray-300'>
				<Outlet />
			</main>
		</div>
	)
}

export default App
