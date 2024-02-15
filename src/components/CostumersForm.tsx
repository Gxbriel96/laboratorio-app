interface Costumer {
	id: number
	name?: string
	lastname?: string
	age?: number
	phone?: number
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault()
	const dataPaciente: Costumer = {
		cedula: e.target.cedula.value,
		nombre: e.target.name.value,
		apellido: e.target.lastname.value,
		correo: e.target.email.value,
	}
	alert('GUARDADO!!!!')
	console.log(dataPaciente)
}
export const CostumersForm: React.FC = () => {
	return (
		<div className='flex flex-col border rounded items-center max-w-md mx-auto my-0 bg-gray-50 p-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl'>
			<div className='bg-gray-100 w-full p-2'>
				<h1 className='text-2xl font-semibold text-gray-600'>
					Información del Cliente
				</h1>
			</div>
			<form className='w-full' onSubmit={handleSubmit}>
				<div className='grid grid-cols-2 gap-6'>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label
								htmlFor='name'
								className='text-sm font-medium text-gray-700 mb-2'
							>
								Nombre
							</label>
							<input
								id='name'
								type='text'
								className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Nombre'
							/>
						</div>
					</div>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label
								htmlFor='lastname'
								className='text-sm font-medium text-gray-700 mb-2'
							>
								Apellido
							</label>
							<input
								id='lastname'
								type='text'
								className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Apellido'
							/>
						</div>
					</div>
				</div>
				<div className='my-2'>
					<div className='flex flex-col'>
						<label
							htmlFor='address'
							className='text-sm font-medium text-gray-700 mb-2'
						>
							Dirección
						</label>
						<input
							id='address'
							type='text'
							className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='Dirección'
						/>
					</div>
				</div>
				<div className='my-2'>
					<div className='flex flex-col'>
						<label
							htmlFor='email'
							className='text-sm font-medium text-gray-700 mb-2'
						>
							Correo Electrónico
						</label>
						<input
							id='email'
							type='text'
							className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='Correo Electrónico'
						/>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-6'>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label
								htmlFor='cedula'
								className='text-sm font-medium text-gray-700 mb-2'
							>
								Cédula
							</label>
							<input
								id='cedula'
								type='text'
								className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Cédula'
							/>
						</div>
					</div>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label
								htmlFor='name'
								className='text-sm font-medium text-gray-700 mb-2'
							>
								Nombre
							</label>
							<input
								id='name'
								type='text'
								className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Nombre'
							/>
						</div>
					</div>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label
								htmlFor='name'
								className='text-sm font-medium text-gray-700 mb-2'
							>
								Nombre
							</label>
							<input
								id='name'
								type='text'
								className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Nombre'
							/>
						</div>
					</div>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label
								htmlFor='name'
								className='text-sm font-medium text-gray-700 mb-2'
							>
								Nombre
							</label>
							<input
								id='name'
								type='text'
								className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Nombre'
							/>
						</div>
					</div>
				</div>
				<button
					className='w-24 py-2 px-4 mt-10 bg-blue-500 text-white rounded hover:bg-blue-600'
					type='submit'
				>
					Guardar
				</button>
			</form>
		</div>
	)
}
