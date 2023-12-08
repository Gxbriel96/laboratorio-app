import { CostumerInput } from './CostumerInput'

export const CostumersForm = () => {
  return (
        <div className='bg-gradient-to-r from-blue-400 to-blue-100 via-blue-50 from-blue-100 to-blue-400 h-screen w-screen' >
            <h1>FORMULARIO DE CLIENTES</h1>
            <form>
                <div>
                    <CostumerInput/>
                </div>
            </form>
        </div>
  )
}
