import { useState } from 'react'

const LoginLab = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e) => {
		e.preventDefault()
		// Aquí puedes agregar la lógica para autenticar al usuario
		console.log('Usuario:', username)
		console.log('Contraseña:', password)
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-primary'>
			<div className='max-w-md w-full p-6 bg-white rounded-lg shadow-md'>
				<h2 className='text-2xl font-semibold text-gray-600 mb-4'>
					Iniciar sesión
				</h2>
				<form onSubmit={handleLogin}>
					<div className='mb-4'>
						<label htmlFor='username' className='block text-gray-700'>
							Nombre de usuario
						</label>
						<input
							type='text'
							id='username'
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
							placeholder='Ingresa tu nombre de usuario'
							value={username}
							onChange={(e) => {
								setUsername(e.target.value)
							}}
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='password' className='block text-gray-700'>
							Contraseña
						</label>
						<input
							type='password'
							id='password'
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
							placeholder='Ingresa tu contraseña'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
					>
						Iniciar sesión
					</button>
				</form>
			</div>
		</div>
	)
}

export default LoginLab
