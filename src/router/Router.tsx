import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

import { Error404 } from '../components/Error404'
import { CostumersForm } from '../components/CostumersForm'
import LoginLab from '../components/LoginLab'
import Prueba from '../components/Prueba'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error404 />,
		children: [
			{
				path: '/agregar-paciente',
				element: <CostumersForm />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginLab />,
	},
	{
		path: '/prueba-orina',
		element: <Prueba />,
	},
])
