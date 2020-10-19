const fs = require('fs')

const uiColors = require('./themes/ui/ui-dark')
const SyntaxFactory = require('./themes/syntax/syntax-factory')

// "label": "Dracula Pure",
//                 "uiTheme": "vs-dark",
//                 "path": "./themes/Dracula Pure-color-theme.json"
const themes = [
	{
		name: 'Dracula Pure',
		id: 'Dracula Pure-color-theme'
	}
]

for (const { name, id } of themes) {
	const tokens = require(`./themes/syntax/${id}`)
	const tokenColors = SyntaxFactory(tokens)
	const theme = {
		$schema: 'vscode://schemas/color-theme',
		name,
		type: 'dark',
		tokenColors,
		colors: { ...uiColors },
		semanticHighlighting: true,
	}
	const themeContent = JSON.stringify(theme, null, '\t')

	fs.writeFile(`./themes/${id}.json`, themeContent, error => {
		if (error)
			throw error
		console.log(`'${name}' theme file written to './themes/${id}.json'`)
	})
}
