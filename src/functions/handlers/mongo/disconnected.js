const chalk = require('chalk')

module.exports = {
  name: 'disconnected',
  async execute () {
    console.log(
      chalk.redBright('[Database Status] : Disconnected from MongoDB! ${error}')
    )
  }
}
