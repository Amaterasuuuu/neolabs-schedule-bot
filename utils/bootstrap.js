require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

console.log('Bot has been started')
bot.launch()

module.exports = bot
