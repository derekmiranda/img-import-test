module.exports = class PeekCompilationPlugin {
	apply(compiler) {
		compiler.plugin('emit', (compilation, callback) => {
			console.log('_modules', Object.keys(compilation._modules))
			callback()
		})

		// compiler.plugin('compilation', (compilation) => {
		// 	compilation.plugin('normal-module-loader', function(loaderCtx, module) {
		// 		console.log('module', module)
		// 	})
		// })
	}
}
