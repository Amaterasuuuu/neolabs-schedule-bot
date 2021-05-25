module.exports.days = [
    'Понедельник', 'Вторник', 'Среда',
    'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
]

module.exports.schedule = {
    monday: [
        'Понедельник',
        '9:00 - Работа',
        '19:00 - Созвон с тимлидами'
    ],
    tuesday: [
        'Вторник',
        '9:00 - Работа',
        '18:30 - Курсы'
    ],
    wednesday: [
        'Среда',
        '9:00 - Работа',
        '18:00 - Волейбол'
    ],
    thursday: [
        'Четверг',
        '9:00 - Работа',
        '18:30 - Курсы'
    ],
    friday: [
        'Пятница',
        '9:00 - Работа',
        '17:00 - Планёрка'
    ],
    saturday: [
        'Суббота',
        '14:30 - Волейбол',
        '18:30 - Курсы'
    ],
    sunday: [
        'Воскресенье',
        'Отдых'
    ]
}

// module.exports.findSchedule = (day) => {
//     const schedule = Object.keys(this.schedule)
//         .find(key => this.schedule[key][0] == day)
//     return schedule
//         ? this.schedule[schedule].join('\n')
//         : 'Такой день не найден'
// }

module.exports.findSchedule = (day) => 
    this.schedule[
        Object.keys(this.schedule).find(key => this.schedule[key][0] == day)
    ].join('\n')
