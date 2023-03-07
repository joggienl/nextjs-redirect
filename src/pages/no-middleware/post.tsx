import Head from 'next/head'
import Link from 'next/link'

export default function PostPage() {
	return (
		<>
			<Head>
				<title>Post page</title>
			</Head>
			<p>
				You are visiting <code>/src/pages/no-middleware/posts.tsx</code>
			</p>
			<p>
				Both link to{' '}
				<Link href="/no-middleware/postings">
					<code>&lt;Link href="/no-middleware/postings" /&gt;</code>
				</Link>{' '}
				and{' '}
				<Link href="/no-middleware/post">
					<code>&lt;Link href="/no-middleware/post" /&gt;</code>
				</Link>{' '}
				work as expected.
			</p>
		</>
	)
}
