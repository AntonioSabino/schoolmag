/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['res.cloudinary.com', 'images.pexels.com'],
		remotePatterns: [{ hostname: 'images.pexels.com' }],
	},
}

export default nextConfig
