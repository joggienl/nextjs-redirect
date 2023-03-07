import Head from 'next/head'
import Link from 'next/link'

export default function PostPage() {
	return (
		<>
			<Head>
				<title>Post page</title>
			</Head>
			<p>This is the main post page!</p>
			<p>
				Notice the url. If the middleware.ts file is active, clicking{' '}
				<Link href="/postings">
					<code>&lt;Link href="/postings"&gt;postings&lt;/Link&gt;</code>
				</Link>{' '}
				will show as "postings". Disabling the middleware.ts file it will show
				the redirected page.
			</p>
			<p>
				Using a regular hyperlink to{' '}
				<a href="/postings">
					<code>&lt;a href="/postings"&gt;postings&lt;/a&gt;</code>
				</a>{' '}
				will work fine but client side routing is not being used.
			</p>
		</>
	)
}
