import shelljs from 'shelljs'

// 使用 shelljs 来复制
shelljs.cp('-R', "public", "dist")
shelljs.cp('-R', "views", "dist")