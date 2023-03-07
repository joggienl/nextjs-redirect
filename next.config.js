/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/postings',
				destination: '/post',
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
