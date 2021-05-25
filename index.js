const bot = require('./utils/bootstrap')
const { days, findSchedule } = require('./utils/schedule')

bot.start(ctx => ctx.reply(`Привет, ${ctx.message.from.first_name}`))

bot.hears(days, ctx => ctx.reply(findSchedule(ctx.message.text)))
