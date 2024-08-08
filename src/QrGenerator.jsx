import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import { GENERATE_DATA } from './constans'

export default function QrGenerator() {
	const [change, setChange] = useState('')
	const [result, setResult] = useState('')

	function onClickHandler() {
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

		localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, change]))
		setResult(change)
		setChange('')
	}

	function onChangeHandler(event) {
		setChange(event.target.value)
		setResult('')
	}

	return (
		<div>
			<input
				type='text'
				value={change}
				placeholder='Введи текст'
				onChange={onChangeHandler}
				className='input'
			/>
			<button type='button' onClick={onClickHandler}>
				Сгенерировать QR{' '}
			</button>
			{result !== '' ? <QRCodeSVG value={result} /> : null}
		</div>
	)
}
