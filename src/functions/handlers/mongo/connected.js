const chalk = require('chalk')

module.exports = {
  name: 'connecting',
  async execute () {
    console.log(chalk.greenBright('[Database Status] : Connected to MongoDB!'))
  }
}
