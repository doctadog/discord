const chalk = require('chalk')

module.exports = {
  name: 'error',
  async execute (error) {
    console.log(chalk.redBright('[Database Status] : An error has occurred with MongoDB!'))
  }
}
