const path = require('path')
const rollupPluginUrl = require('rollup-plugin-url')

const PeekCompilationPlugin = require('./PeekCompilationPlugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js' 
	},
	module: {
		rules: [
			{
				test: /(index\.js|red_guy\.png)$/,
				use: {
					loader: 'webpack-rollup-loader',
					options: {
						// plugins: [rollupPluginUrl({
						// 	emitFiles: false,
						// 	include: [
						// 		'**/*.png',
						// 		'**/*.jpg',
						// 		'**/*.gif',
						// 		'**/*.svg',
						// 	],
						// 	limit: Infinity,
						// })]
					},
				},
			},
			{
				test: /\.(png)$/,
				use: ['url-loader'],
			},
		]
	},
	plugins: [new PeekCompilationPlugin()]
}