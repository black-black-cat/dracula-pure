import { writeFile } from 'fs'
import path from 'path'
import pify from 'pify'

import { colors } from './colors'
import getTheme from './getTheme'
import expose from './expose.js'

const {__dirname} = expose;

const build = function () {
    console.log('' + getTheme)
    const themeObj = getTheme(colors)
    let filename = 'Dracula Pure-color-theme.json'
    filename = path.resolve(__dirname, '../themes/' + filename)
    let content = JSON.stringify(themeObj, null, 4)

    return pify(writeFile)(filename, content)
    .then(val => {
            return filename
        })
        .catch(err => {
            console.log(err)
        })
}

// build()

export default build