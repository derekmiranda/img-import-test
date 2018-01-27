module.exports = class PeekCompilationPlugin {
	apply(compiler) {
		compiler.plugin('emit', (compilation, callback) => {
			console.log('_modules', Object.keys(compilation._modules))
			callback()
		})
	}
}