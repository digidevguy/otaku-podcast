/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'default',
		domains: ['localhost'],
		// remotePatterns: [
		// 	{
		// 		protocol: 'http',
		// 		hostname: 'localhost',
		// 		port: '1337',
		// 		pathname: '/:path*',
		// 	},
		// ],
	},
};

module.exports = nextConfig;
