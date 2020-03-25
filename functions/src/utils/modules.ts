import * as ModuleAlias from 'module-alias'
import * as path from 'path'

ModuleAlias.addAliases({
  config: path.join(__dirname, '../config'),
  controllers: path.join(__dirname, '../controllers'),
  services: path.join(__dirname, '../services'),
  templates: path.join(__dirname, '../templates'),
  utils: path.join(__dirname, '../utils')
})
