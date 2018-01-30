# Image Imports w/ Rollup Babel loader

## Using Rollup URL Plugin
- Allows Rollup to process binary files
- However, prevents those files from being in Webpack's dependency graph

## Not using plugin
- Rollup can't compile properly
- But files are in dependency graph

## Notes
- Using a plugin to peek at the compilation's modules at compiler's "emit" stage (compilation._modules)
