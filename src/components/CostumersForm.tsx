interface Costumer {
	id: number
	name?: string
	lastname?: string
	age?: number
	phone?: number
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault()

	alert('GUARDADO!!!!')
}
export const CostumersForm: React.FC = () => {
	return (
		<div className='flex flex-col border rounded items-center max-w-md mx-auto my-0 bg-gray-50 p-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl'>
			<div className='bg-gray-100 w-full p-2'>
				<h2 className='text-2xl font-semibold text-gray-600'>
					Datos del Paciente
				</h2>
			</div>
			<form className='w-full' onSubmit={handleSubmit}>
				<div className='grid grid-cols-2 gap-6'>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label htmlFor='name'>Nombre</label>
							<input id='name' type='text' placeholder='Nombre' />
						</div>
					</div>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label htmlFor='lastname'>Apellido</label>
							<input id='lastname' type='text' placeholder='Apellido' />
						</div>
					</div>
				</div>
				<div className='my-2'>
					<div className='flex flex-col'>
						<label htmlFor='cedula'>Cédula</label>
						<input id='cedula' type='text' placeholder='Cedula' />
					</div>
				</div>
				<div className='my-2'>
					<div className='flex flex-col'>
						<label htmlFor='email'>Correo Electrónico</label>
						<input id='email' type='text' placeholder='Correo Electrónico' />
					</div>
				</div>
				<div className='grid grid-cols-2 gap-6'>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label htmlFor='edad'>Edad</label>
							<input id='edad' type='number' min='0' placeholder='Edad' />
						</div>
					</div>
					<div className='my-2'>
						<div className='flex flex-col'>
							<label htmlFor='categoria'>Género</label>
							<select name='categoria'>
								<option value='Otros' disabled selected>
									Seleccione una opción
								</option>
								<option value='Masculino'>Masculino</option>
								<option value='Femenino'>Femenino</option>
								<option value='OtroGen'>Otros</option>
							</select>
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
