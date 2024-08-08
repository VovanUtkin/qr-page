import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GenerateHistory from './GenerateHistory'
import Nav from './Nav'
import QrCodeScanner from './QrCodeScanner'
import QrGenerator from './QrGenerator'
import ScanHistory from './ScanHistory'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Nav />,
	},
	{
		path: '/generate',
		element: <QrGenerator />,
	},
	{
		path: '/scan',
		element: <QrCodeScanner />,
	},
	{
		path: '/history-generate',
		element: <GenerateHistory />,
	},
	{
		path: '/scan-history',
		element: <ScanHistory />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* 		<Layout />
		<QrGenerator /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
)
