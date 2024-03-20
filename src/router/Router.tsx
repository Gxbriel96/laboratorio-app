import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

import { Error404 } from '../components/Error404'
import { CostumersForm } from '../components/CostumersForm'
import LoginLab from '../components/LoginLab'
import Prueba from '../components/Prueba'
import Home from '../components/Home'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/agregar-paciente',
				element: <CostumersForm />,
			},
			{
				path: '/prueba-orina',
				element: <Prueba />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginLab />,
	},
])
