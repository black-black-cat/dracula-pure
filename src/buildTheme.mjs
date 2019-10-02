import { colors } from './colors'
import getTheme from './getTheme'
import { writeFile } from 'fs'
import path from 'path'
import expose from './expose.js';

const {__dirname} = expose;

const themeObj = getTheme(colors)
let filename = 'Dracula Pure-color-theme.json'
filename = path.resolve(__dirname, '../themes/' + filename)

writeFile(filename, JSON.stringify(themeObj, null, 4), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`writeFile done \n in ${filename}`)
    }
})