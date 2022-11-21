/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgo: false
					}
				}
			]
		});

		//  Source: https://cwtuan.blogspot.com/2022/10/disable-css-module-in-nextjs-v1231-sept.html
		config.module.rules.forEach((rule) => {
			const { oneOf } = rule;
			if (oneOf) {
				oneOf.forEach((one) => {
					if (!`${one.issuer?.and}`.includes("_app")) return;
					one.issuer.and = [path.resolve(__dirname)];
				});
			}
		});
		return config;
	}
};

module.exports = nextConfig;
