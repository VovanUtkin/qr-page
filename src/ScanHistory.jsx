import { SCAN_DATA } from './constans.js'

export default function ScanHistory() {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

	return (
		<div>
			<p>SCAN HISTORY</p>
			{data.map((text)=> (
				<p key = {text}>{text}</p>
			))}
		</div>
	)
}
