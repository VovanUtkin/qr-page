import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import { SCAN_DATA } from './constans.js'

export default function QrCodeScanner() {
	const [scanned, setScanned] = useState(null)
	const scanHandler = result => {
		setScanned(result[0].rowValue)

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]")
		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify(...prevData, [result[0].rowValue])
		)
	}

	return (
		<div className='container'>
			<p>{scanned}</p>
			<Scanner
				onScan={scanHandler}
				components={{
					audio: false,
					finder: false,
				}}
				styles={{ width: 300, height: 300 }}
			/>
		</div>
	)
}
