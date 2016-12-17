import * as path from 'path'

declare const __dirname: string

export const global = path.join(__dirname, '../')
export const dist = path.join(global, 'dist')
