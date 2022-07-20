import { useRoutes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
	const element = useRoutes([
		{
			path: '/',
			element: <Dashboard />,
		},
	])

	return element
}

export default App
