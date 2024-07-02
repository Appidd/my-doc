import fs from 'fs'
import chalk from 'chalk'

const copyBaseUIChangelog = () => {
	const source = `node_modules/@medcrab/medcrab-base-ui/CHANGELOG.md`
	const dest = `src/base-components/CHANGELOG.md`

	fs.readFile(source, 'utf8', (err, data) => {
		if (err) {
			console.log(chalk.yellow(` WARN: no such file or directory, ${source}`))
			return
		}
		fs.writeFile(dest, data, 'utf8', () => {})
	})
}

const copyBusinessUIChangelog = () => {
	const source = `node_modules/@medcrab/medcrab-business-ui/CHANGELOG.md`
	const dest = `src/business-components/CHANGELOG.md`

	fs.readFile(source, 'utf8', (err, data) => {
		if (err) {
			console.log(chalk.yellow(` WARN: no such file or directory, ${source}`))
			return
		}
		fs.writeFile(dest, data, 'utf8', () => {})
	})
}

const copyCommonChangelog = () => {
	const commonPkgs = ['directives', 'http-client', 'hooks', 'style', 'utils', 'pro-core', 'base-data', 'eslint-config-prettier', 'eslint-config-vue']
	commonPkgs.forEach((pkg) => {
		const source = `node_modules/@medcrab-common/${pkg}/CHANGELOG.md`
		const dest = `src/common/${pkg}/CHANGELOG.md`

		fs.readFile(source, 'utf8', (err, data) => {
			if (err) {
				console.log(chalk.yellow(` WARN: no such file or directory, ${source}`))
				return
			}
			fs.writeFile(dest, data, 'utf8', () => {})
		})
	})
}

const copyPluginsChangelog = () => {
	const sdkPkgs = ['ca-sdk-miniprogram']
	const pluginsPkgs = ['payment-article-plugin']
	sdkPkgs.forEach((pkg) => {
		const source = `node_modules/${pkg}/CHANGELOG.md`
		const dest = `src/plugins/${pkg}/CHANGELOG.md`

		fs.readFile(source, 'utf8', (err, data) => {
			if (err) {
				console.log(chalk.yellow(` WARN: no such file or directory, ${source}`))
				return
			}
			fs.writeFile(dest, data, 'utf8', () => {})
		})
	})
	pluginsPkgs.forEach((pkg) => {
		const source = `node_modules/@medcrab-common/${pkg}/CHANGELOG.md`
		const dest = `src/plugins/${pkg}/CHANGELOG.md`

		fs.readFile(source, 'utf8', (err, data) => {
			if (err) {
				console.log(chalk.yellow(` WARN: no such file or directory, ${source}`))
				return
			}
			fs.writeFile(dest, data, 'utf8', () => {})
		})
	})
}

const copyChangelog = () => {
	copyBaseUIChangelog()
	copyBusinessUIChangelog()
	copyCommonChangelog()
	copyPluginsChangelog()
}

export default copyChangelog
