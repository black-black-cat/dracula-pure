export default colors => ({
	'name': 'Dracula Pure',
	'type': 'dark',
	'colors': {
		'editor.background': colors.background,
		'editor.foreground': colors.foreground,
		'activityBarBadge.background': '#007acc',
		'sideBarTitle.foreground': '#bbbbbb',
		'editor.lineHighlightBackground': '#0000',
        'editor.lineHighlightBorder': '#7775'
	},
	'tokenColors': [
		{
			'name': 'Comment',
			'scope': 'comment',
			'settings': {
				'foreground': colors.comment,
				'fontStyle': ''
			}
		},
		{
			'name': 'String',
			'scope': 'string',
			'settings': {
				'foreground': colors.yellow
			}
		},
		{
			'name': 'Number',
			'scope': 'constant.numeric',
			'settings': {
				'foreground': colors.purple
			}
		},
		{
			'name': 'Built-in constant and built-in variable',
			'scope': 'constant.language, variable.language',
			'settings': {
				'foreground': colors.purple
			}
		},
		{
			'name': 'User-defined constant',
			'scope': [
				'constant.character',
				'constant.other'
			],
			'settings': {
				'foreground': colors.purple
			}
		},
		{
			'name': 'Variable',
			'scope': 'variable',
			'settings': {
				'fontStyle': '',
				'foreground': colors.foreground
			}
		},
		{
			'name': 'Ruby\'s @variable',
			'scope': 'variable.other.readwrite.instance',
			'settings': {
				'fontStyle': '',
				'foreground': colors.orange
			}
		},
		{
            'name': 'Template string interpolation',
			'scope': 'string.template meta.template.expression',
			'settings': {
				'foreground': colors.foreground
			}
        },
        {
            'name': 'Interpolation begin and end punctuation',
            'scope': 'punctuation.definition.template-expression',
            'settings': {
				'fontStyle': '',
				'foreground': colors.pink
			}
        },
		{
			'name': 'String interpolation',
			'scope': [
				'constant.character.escaped',
				'constant.character.escape',
				'string source',
				'string source.ruby'
			],
			'settings': {
				'fontStyle': '',
				'foreground': colors.pink
			}
		},
		{
			'scope': 'punctuation.section.embedded',
			'settings': {
				'foreground': colors.pink
			}
		},
		{
			'name': 'Keyword',
			'scope': 'keyword',
			'settings': {
				'foreground': colors.pink
			}
		},
		{
			'name': 'Storage',
			'scope': 'storage',
			'settings': {
				'fontStyle': '',
				'foreground': colors.pink
			}
		},
		{
			'name': 'Storage type',
			'scope': 'storage.type',
			'settings': {
				'fontStyle': 'italic',
				'foreground': colors.cyan
			}
		},
		/* {
			'name': 'Class name',
			'scope': 'entity.name.type.class, entity.name.class',
			'settings': {
				'fontStyle': 'underline',
				'foreground': colors.green
			}
		},
		{
			'name': 'Inherited class',
			'scope': 'entity.other.inherited-class',
			'settings': {
				'fontStyle': 'italic underline',
				'foreground': colors.green
			}
		},
		{
			'name': 'Entity name type',
			'scope': 'entity.name.type',
			'settings': {
				'fontStyle': 'underline',
				'foreground': colors.green
			}
		},
		{
			'name': 'Instance',
			'scope': 'entity.name.type.instance',
			'settings': {
				'foreground': colors.green
			}
		}, */
		{
			'scope': 'entity.name',
			'settings': {
				'fontStyle': '',
                'foreground': colors.green
            }
        },
		{
			'name': 'Function argument',
			'scope': 'variable.parameter',
			'settings': {
				'fontStyle': 'italic',
				'foreground': colors.orange
			}
		},
		{
			'name': 'Tag name',
			'scope': 'entity.name.tag',
			'settings': {
				'fontStyle': '',
				'foreground': colors.pink
			}
		},
		{
			'name': 'Tag attribute',
			'scope': 'entity.other.attribute-name',
			'settings': {
				'fontStyle': '',
				'foreground': colors.green
			}
		},
		{
			'name': 'Library function',
			'scope': 'support.function',
			'settings': {
				'fontStyle': '',
				'foreground': colors.cyan
			}
		},
		{
			'name': 'Library constant',
			'scope': 'support.constant',
			'settings': {
				'fontStyle': '',
				'foreground': colors.cyan
			}
		},
		{
			'name': 'Library class/type',
			'scope': [
				'support.type',
				'support.class'
			],
			'settings': {
				'fontStyle': 'italic',
				'foreground': colors.cyan
			}
		},
		{
			'name': 'Library variable',
			'scope': 'support.other.variable',
			'settings': {
				'fontStyle': ''
			}
		},
		{
			'name': 'Invalid',
			'scope': 'invalid',
			'settings': {
				'background': '#ff79c6',
				'fontStyle': '',
				'foreground': '#F8F8F0'
			}
		},
		{
			'name': 'Invalid deprecated',
			'scope': 'invalid.deprecated',
			'settings': {
				'background': '#bd93f9',
				'foreground': '#F8F8F0'
			}
		},
		{
			'name': 'JSON String',
			'scope': 'meta.structure.dictionary.json string.quoted.double.json',
			'settings': {
				'foreground': '#CFCFC2'
			}
		},
		{
			'name': 'diff.header',
			'scope': [
				'meta.diff',
				'meta.diff.header'
			],
			'settings': {
				'foreground': colors.comment
			}
		},
		{
			'name': 'diff.deleted',
			'scope': 'markup.deleted',
			'settings': {
				'foreground': colors.pink
			}
		},
		{
			'name': 'diff.inserted',
			'scope': 'markup.inserted',
			'settings': {
				'foreground': colors.green
			}
		},
		{
			'name': 'diff.changed',
			'scope': 'markup.changed',
			'settings': {
				'foreground': colors.yellow
			}
		},
		{
			'scope': 'constant.numeric.line-number.find-in-files - match',
			'settings': {
				'foreground': colors.purple
			}
		},
		{
			'scope': 'entity.name.filename',
			'settings': {
				'foreground': colors.yellow
			}
		},
		{
			'scope': 'message.error',
			'settings': {
				'foreground': colors.red
			}
		},
		{
			'name': 'JSON Punctuation',
			'scope': [
				'punctuation.definition.string.begin.json - meta.structure.dictionary.value.json',
				'punctuation.definition.string.end.json - meta.structure.dictionary.value.json'
			],
			'settings': {
                'foreground': '#EEEEEE',
                'fontStyle': ''
			}
		},
		{
			'name': 'JSON Structure',
			'scope': 'meta.structure.dictionary.json string.quoted.double.json',
			'settings': {
				'foreground': colors.cyan
			}
		},
		{
			'name': 'JSON String',
			'scope': 'meta.structure.dictionary.value.json string.quoted.double.json',
			'settings': {
				'foreground': colors.yellow
			}
		},
		{
			'name': 'JSON: 6 deep',
			'scope': 'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
			'settings': {
				'foreground': colors.green
			}
		},
		{
			'name': 'JSON: 5 deep',
			'scope': 'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
			'settings': {
				'foreground': colors.orange
			}
		},
		{
			'name': 'JSON: 4 deep',
			'scope': 'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
			'settings': {
				'foreground': colors.pink
			}
		},
		{
			'name': 'JSON: 3 deep',
			'scope': 'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
			'settings': {
				'foreground': colors.purple
			}
		},
		{
			'name': 'JSON: 2 deep',
			'scope': 'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
			'settings': {
				'foreground': colors.green
			}
		},
		{
			'name': 'JSON: 1 deep',
			'scope': 'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
			'settings': {
				'foreground': colors.orange
			}
		}
	]
})