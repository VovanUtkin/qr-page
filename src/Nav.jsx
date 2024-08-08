import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<nav style={{ display: 'flex', flexDirection: 'column' }}>
			<Link to='generate'>Генерировать QR CODE</Link>
			<Link to='scan'>Сканировать QR CODE</Link>
			<Link to='history-generate'>История Генерирования QR CODE</Link>
			<Link to='scan-history'>История Сканирования QR CODE</Link>
		</nav>
	)
}
