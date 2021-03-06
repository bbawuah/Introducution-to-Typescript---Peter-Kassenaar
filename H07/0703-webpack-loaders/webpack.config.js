// webpack.config.js
module.exports = {
	entry: './index.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts']
	},
	module: {
		loaders: [
			{ test: /.ts$/, loader: 'ts-loader' }
		]
	},
	watch: true
};