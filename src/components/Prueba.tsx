import { useState } from 'react'

const Prueba = () => {
	const [formState, setFormState] = useState({
		densidad: '',
		apariencia: '',
		olor: '',
		color: '',
		ph: '',
		proteinas: 'Negativo',
		glucosa: 'Negativo',
		cetona: 'Negativo',
		hemoglobina: 'Negativo',
		sangre: 'Negativo',
		bilirrubina: 'Negativo',
		pigBiliares: 'Negativo',
		nitritos: 'Negativo',
		leucocitos: 'Negativo',
		celulas: '',
		leucocitosE: '',
		piocitos: '',
		hematies: '',
		celRedondas: '',
		cristales: '',
		mucina: '',
		bacterias: '',
	})

	const handleInputChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	const handleSelectChange = (e, name) => {
		setFormState({ ...formState, [name]: e.target.value })
	}

	return (
		<section>
			<article>
				<h2>Examen Macroscópico</h2>
				<div>
					<div>
						<label htmlFor='densidad'>Densidad</label>
						<input
							type='text'
							name='densidad'
							id='densidad'
							value={formState.densidad}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label htmlFor='apariencia'>Apariencia</label>
						<input
							type='text'
							name='apariencia'
							id='apariencia'
							value={formState.apariencia}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label htmlFor='olor'>Olor</label>
						<input
							type='text'
							name='olor'
							id='olor'
							value={formState.olor}
							onChange={handleInputChange}
						/>
					</div>

					<div className='sm:col-span-3'>
						<label htmlFor='color'>Color</label>
						<input
							type='text'
							name='color'
							id='color'
							value={formState.color}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label htmlFor='ph'>PH</label>
						<input
							type='text'
							name='ph'
							id='ph'
							value={formState.ph}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</article>

			<article>
				<h2>Examen Químico</h2>
				<div>
					<div>
						<label htmlFor='proteinas'>Proteínas</label>
						<select
							name='proteinas'
							id='proteinas'
							value={formState.proteinas}
							onChange={(e) => {
								handleSelectChange(e, 'proteinas')
							}}
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div>
						<label htmlFor='glucosa'>Glucosa</label>
						<select
							name='glucosa'
							id='glucosa'
							value={formState.glucosa}
							onChange={(e) => {
								handleSelectChange(e, 'glucosa')
							}}
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div>
						<label htmlFor='cetona'>Cetona</label>
						<select
							name='cetona'
							id='cetona'
							value={formState.cetona}
							onChange={(e) => {
								handleSelectChange(e, 'cetona')
							}}
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div>
						<label htmlFor='hemoglobina'>Hemoglobina</label>
						<select
							name='hemoglobina'
							id='hemoglobina'
							value={formState.hemoglobina}
							onChange={(e) => {
								handleSelectChange(e, 'hemoglobina')
							}}
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div className='sm:col-span-3'>
						<label htmlFor='sangre'>Sangre</label>
						<select
							name='sangre'
							id='sangre'
							value={formState.sangre}
							onChange={(e) => {
								handleSelectChange(e, 'sangre')
							}}
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='bilirrubina'
							className='block text-sm font-medium text-gray-700'
						>
							Bilirrubina
						</label>
						<select
							name='bilirrubina'
							id='bilirrubina'
							value={formState.bilirrubina}
							onChange={(e) => {
								handleSelectChange(e, 'bilirrubina')
							}}
							className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='pigBiliares'
							className='block text-sm font-medium text-gray-700'
						>
							Pig. Biliares
						</label>
						<select
							name='pigBiliares'
							id='pigBiliares'
							value={formState.pigBiliares}
							onChange={(e) => {
								handleSelectChange(e, 'pigBiliares')
							}}
							className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='nitritos'
							className='block text-sm font-medium text-gray-700'
						>
							Nitritos
						</label>
						<select
							name='nitritos'
							id='nitritos'
							value={formState.nitritos}
							onChange={(e) => {
								handleSelectChange(e, 'nitritos')
							}}
							className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='leucocitos'
							className='block text-sm font-medium text-gray-700'
						>
							Leucocitos
						</label>
						<select
							name='leucocitos'
							id='leucocitos'
							value={formState.leucocitos}
							onChange={(e) => {
								handleSelectChange(e, 'leucocitos')
							}}
							className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						>
							<option value='Negativo'>Negativo</option>
							<option value='Positivo'>Positivo</option>
						</select>
					</div>
				</div>
			</article>

			<article className='mt-6 border-t border-gray-200 pt-6'>
				<h2 className='text-lg font-medium text-gray-900'>
					Examen Microscópico
				</h2>
				<div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
					<div className='sm:col-span-3'>
						<label
							htmlFor='celulas'
							className='block text-sm font-medium text-gray-700'
						>
							Células
						</label>
						<input
							type='text'
							name='celulas'
							id='celulas'
							value={formState.celulas}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='leucocitosE'
							className='block text-sm font-medium text-gray-700'
						>
							Leucocitos
						</label>
						<input
							type='text'
							name='leucocitosE'
							id='leucocitosE'
							value={formState.leucocitosE}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='piocitos'
							className='block text-sm font-medium text-gray-700'
						>
							Piocitos
						</label>
						<input
							type='text'
							name='piocitos'
							id='piocitos'
							value={formState.piocitos}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='hematies'
							className='block text-sm font-medium text-gray-700'
						>
							Hematíes
						</label>
						<input
							type='text'
							name='hematies'
							id='hematies'
							value={formState.hematies}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='celRedondas'
							className='block text-sm font-medium text-gray-700'
						>
							Cel. Redondas
						</label>
						<input
							type='text'
							name='celRedondas'
							id='celRedondas'
							value={formState.celRedondas}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='cristales'
							className='block text-sm font-medium text-gray-700'
						>
							Cristales
						</label>
						<input
							type='text'
							name='cristales'
							id='cristales'
							value={formState.cristales}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='mucina'
							className='block text-sm font-medium text-gray-700'
						>
							Mucina
						</label>
						<input
							type='text'
							name='mucina'
							id='mucina'
							value={formState.mucina}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>

					<div className='sm:col-span-3'>
						<label
							htmlFor='bacterias'
							className='block text-sm font-medium text-gray-700'
						>
							Bacterias
						</label>
						<input
							type='text'
							name='bacterias'
							id='bacterias'
							value={formState.bacterias}
							onChange={handleInputChange}
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>
				</div>
			</article>
		</section>
	)
}

export default Prueba
