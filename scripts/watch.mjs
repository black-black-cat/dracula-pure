import fs from 'fs'
import path from 'path'
import build from '../src/buildTheme'
import expose from '../src/expose'
const {__dirname} = expose;

const buttonPressesLogFile = path.resolve(__dirname, '../src/');

console.log(`Watching for file changes on ${buttonPressesLogFile}`);

let fsWait = false;

fs.watch(buttonPressesLogFile, (event, filename) => {
    if (filename) {
        if (fsWait) return;
        fsWait = setTimeout(() => {
            fsWait = false;
        }, 25);

        process.stdout.write('Building... ');
        console.time('Done');
        build()
            .then((filename) => {
                console.timeEnd('Done');
            })
            .catch(err => {
                console.timeEnd('Done');
                console.error(err);
            });
    }
});