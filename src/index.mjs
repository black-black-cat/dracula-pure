import build from './buildTheme'

build()
    .then(filename => {
        console.log(`writeFile done \n in ${filename}`)
    })
    .catch(err => {
        console.log(err)
    })