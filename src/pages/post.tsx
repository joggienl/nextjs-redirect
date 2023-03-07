import Head from 'next/head'
import Link from 'next/link'

export default function PostPage() {
	return (
		<>
			<Head>
				<title>Post page</title>
			</Head>
			<p>
				You are visiting <code>/src/pages/posts.tsx</code>
			</p>
			<p>
				Notice the url. If the middleware.ts file is active, clicking{' '}
				<Link href="/postings">
					<code>&lt;Link href="/postings" /&gt;</code>
				</Link>{' '}
				will show as "postings". Refreshing the page will follow the redirect.
				Disabling the middleware.ts file it will also just do the redirected.
			</p>
			<p>
				Using a regular hyperlink to{' '}
				<a href="/postings">
					<code>&lt;a href="/postings" /&gt;</code>
				</a>{' '}
				will work fine but client side routing is not being used.
			</p>
			<p>
				Middleware has been disabled via a matcher to /no-middleware. Both the
				good Link and Link to path with redirect work fine.
			</p>
		</>
	)
}
