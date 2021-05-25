const { Telegraf } = require('telegraf')

const bot = new Telegraf('1814225367:AAGfSWef272RHOeQjMvSDBvus99HBq6wOGM')

console.log('Bot has been started')
bot.launch()

module.exports = bot
