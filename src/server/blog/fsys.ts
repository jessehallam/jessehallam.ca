import fs from 'fs'
import fspath from 'path'

export function getFilesRecursive(path: string): string[] {
    let results = []

    fs.readdirSync(path).forEach(name => {
        const fullName = fspath.join(path, name)
        if (isDirectory(fullName)) {
            results = results.concat(getFilesRecursive(fullName))
        } else {
            results.push(fullName)
        }
    })

    return results
}

export function readFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, buffer) => {
            if (err) return reject(err)
            resolve(buffer.toString('utf8'))
        })
    })
}

function isDirectory(path: string): boolean {
    return fs.statSync(path).isDirectory()
}

function isFile(path: string): boolean {
    return fs.statSync(path).isFile()
}