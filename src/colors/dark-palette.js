const { darken } = require('./utils')

// summer vacation
// const colors = {
// 	red:       '#FA5E5B',
// 	orange:    '#FF953F',
// 	yellow:    '#FFC83F',
// 	teal:      '#0FDEBD',
// 	green:     '#16C98D',
// 	blueLight: '#70C2FF',
// 	blueDark:  '#2C98EC',
// 	purple:    '#B89FF7',
// 	pinkLight: '#FF98AD',
// 	pinkDark:  '#FF708E',
// }

// dracula
const colors = {
	red:       '#ff5555',
	orange:    '#ffb86c',
	yellow:    darken('#f1fa8c', 30),
	teal:      '#0FDEBD',
	green:     '#50fa7b',
	blueLight: '#8be9fd',
	blueDark:  '#2C98EC',
	purple:    '#bd93f9',
	pinkLight: '#FF98AD',
	pinkDark:  '#ff79c6',
}

module.exports = colors
