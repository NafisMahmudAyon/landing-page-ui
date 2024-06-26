module.exports = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.producthunt.com",
				port: "",
				pathname: "/widgets/**",
			},
			{
				protocol: "https",
				hostname: "source.unsplash.com",
				port: "",
				pathname: "/random/**",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "/photos/**",
			},
		],
	},
};
