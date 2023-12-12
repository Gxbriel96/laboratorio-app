interface Cliente {
  id?: number
  name?: string
  age?: number
}

interface ClienteProps extends Cliente {
  titleInput: string
  typeInput: string
}

export const CostumerInput: React.FC<ClienteProps> = ({ name, titleInput, typeInput }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-2">{titleInput}</label>
      <input id={name} type={typeInput} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={titleInput} />
    </div>
  )
}
