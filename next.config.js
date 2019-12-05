const withPlugins = require("next-compose-plugins")
const withOptimizedImages = require("next-optimized-images")
const withCSS = require("@zeit/next-css")

module.exports = withPlugins(
	[
		[
			withOptimizedImages,
			{
				/* config for next-optimized-images */
				responsive: {
					sizes: [640, 768, 1024, 1280],
				},
			},
		],
		[
			withCSS,
			{
				/* config for next-css */
			},
		],

		// your other plugins here
	],
	{
		exportPathMap: async function() {
			const paths = {
				"/": { page: "/" },
			}
			return paths
		},
	}
)
