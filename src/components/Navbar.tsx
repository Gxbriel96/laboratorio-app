import { NavLink } from 'react-router-dom'

const Navbar = (): JSX.Element => {
	return (
		<header className='bg-gray-800'>
			<nav className='container mx-auto p-4 flex justify-between'>
				<NavLink to='/' className='text-white font-bold text-xl'>
					Mi aplicación
				</NavLink>
				<ul className='flex items-center'>
					<li>
						<NavLink to='/' className='text-gray-300 hover:text-white mx-4'>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/agregar-paciente'
							className='text-gray-300 hover:text-white mx-4'
						>
							Agregar paciente
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/pacientes'
							className='text-gray-300 hover:text-white mx-4'
						>
							Pacientes
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/prueba-orina'
							className='text-gray-300 hover:text-white mx-4'
						>
							Prueba De Orina
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
