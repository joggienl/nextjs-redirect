import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<nav
				style={{
					padding: '16px',
					width: '100%',
				}}
			>
				<ul
					style={{
						display: 'flex',
						gap: '16px',
						marginBottom: '16px',
						listStyleType: 'none',
					}}
				>
					<li>
						<Link href="/">Home</Link>
					</li>
				</ul>
				<ul
					style={{
						display: 'flex',
						gap: '16px',
						marginBottom: '16px',
						listStyleType: 'none',
					}}
				>
					<li>Nav menu:</li>
					<li>
						<Link href="/post">Post overview (no redirect)</Link>
					</li>
					<li>
						<Link href="/postings">Postings overview (redirect)</Link>
					</li>
					<li>
						<Link href="/no-middleware/post">
							Post overview (excluded from middleware, no redirect)
						</Link>
					</li>
					<li>
						<Link href="/no-middleware/postings">
							Postings overview (excluded from middleware, redirect)
						</Link>
					</li>
				</ul>
			</nav>
			<main
				style={{
					padding: '16px',
				}}
			>
				<Component {...pageProps} />
			</main>
		</>
	)
}
