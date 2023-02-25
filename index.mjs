import path from 'node:path'
import * as fs from 'node:fs/promises'

function Rancher (router) {
    this.router = path.basename(router).split('.')[0]
    return this
}

Rancher.getAPI = async function (loadpath) {
    this.api = await fs.readFile(loadpath, {encoding:'utf-8', flag:'r'})
    return this.api
}

const x = await Rancher.getAPI('package.json')

console.log(x)