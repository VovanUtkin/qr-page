import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from './constans'

export default function GenerateHistory() {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
	return (
		<div>
			<p>GENERATE HISCTORY</p>
			{data.map(text => (
				<p key={text}>
					{text}
					<QRCodeSVG value={text} size={100} />
				</p>
			))}
		</div>
	)
}
