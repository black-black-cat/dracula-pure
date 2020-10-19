const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')

tokens = {
	background: grays.gray700,
	foreground: grays.gray100,
	punctuation: grays.gray200,
	string: colors.yellow,
	numeric: colors.purple,
	units: grays.gray200,
	null: colors.purple,
	boolean: colors.purple,
	constant: colors.teal,
	variable: grays.gray100,
	property: grays.gray100,
	keyword: colors.pinkDark,
	control: colors.pinkDark,
	this: colors.pinkDark,
	class: colors.blueLight,
	type: colors.blue,
	function: colors.green,
	comment: grays.gray300,
	tag: colors.pinkDark,
	attribute: colors.green,
	component: colors.yellow,
}

module.exports = tokens
