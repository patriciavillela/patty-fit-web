import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListaDeTreinos from './components/ListaDeTreinos'
import ListaDeSubTreinos from './components/ListaDeSubTreinos'
import ExerciciosDoSubTreino from './components/ExerciciosDoSubTreino'
import './index.css'

const router = createBrowserRouter([
	{
		path: "/treinos",
		element: <ListaDeTreinos />
	},
	{
		path: "/treino/:treinoId",
		element: <ListaDeSubTreinos />
	},
	{
		path: "/sub_treino/:subTreinoId",
		element: <ExerciciosDoSubTreino />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
