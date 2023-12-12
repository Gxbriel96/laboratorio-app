import { CostumerInput } from './CostumerInput'

export const CostumersForm: React.FC = () => {
	return (
		<div className='flex flex-col border rounded items-center max-w-md mx-auto my-0 bg-gray-50 p-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl'>
			<div className='bg-gray-100 w-full p-2'>
				<h1 className='text-2xl font-semibold text-gray-600'>
					Información del Cliente
				</h1>
			</div>
			<form className='w-full'>
				<div className='my-2'>
					<CostumerInput titleInput='Nombre' name='Nombre' typeInput='text' />
				</div>
				<div className='my-2'>
					<CostumerInput
						titleInput='Apellido'
						name='Apellido'
						typeInput='text'
					/>
				</div>
				<div className='my-2'>
					<CostumerInput
						titleInput='Correo Electrónico'
						name='email'
						typeInput='email'
					/>
				</div>
				<div className='my-2'>
					<CostumerInput titleInput='Edad' name='age' typeInput='number' />
				</div>
				<button className='w-24 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600'>
					Guardar
				</button>
			</form>
		</div>
	)
}
