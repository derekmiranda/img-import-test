module.exports = class PeekCompilationPlugin {
	apply(compiler) {
		compiler.plugin('emit', (compilation, callback) => {
			console.log()
			console.log('-'.repeat(20))
			console.log("Compilation's modules")
			console.log('-'.repeat(20))
			console.log(Object.keys(compilation._modules))
			console.log('-'.repeat(20))
			console.log()
			callback()
		})

		// compiler.plugin('compilation', (compilation) => {
		// 	compilation.plugin('normal-module-loader', function(loaderCtx, module) {
		// 		console.log('module', module)
		// 	})
		// })
	}
}
