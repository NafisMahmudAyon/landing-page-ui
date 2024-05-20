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
		],
	},
};
