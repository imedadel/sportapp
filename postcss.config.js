module.exports = {
	plugins: [
		require('tailwindcss'),
		...(process.env.NODE_ENV === `production`
			? [
					require('@fullhuman/postcss-purgecss')({
						content: ['./pages/**/*.js', './components/**/*.js'],
						defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
					}),
			  ]
			: []),
		require('postcss-preset-env'),
	],
}