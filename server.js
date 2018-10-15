const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(process.env.API_TOKEN)
const express = require('express')
const expressApp = express()
const API_TOKEN = process.env.API_TOKEN
const PORT = process.env.PORT || 3000
const appName = process.env.PROJECT_NAME

bot.telegram.setWebhook(`https://${appName}.glitch.me/webhook`)
console.log(`Listening incoming webhook on: https://${appName}.glitch.me/webhook`)
bot.use(Telegraf.log())

/*
1.Блок акции
2.Блок цен
3.Блок консультации
4.Блок "о нас"
5.Блок адресов
6.Блок "хочу записаться"
*/

const mainKeyboard = Markup.keyboard([
    ['🎁 Акция '],
    ['💲 Цены', '☎ Контакты'],
    ['📋 Консультация', '👥 О нас'],
    ['📅 Хочу записаться']
]).oneTime().resize().extra()

const opts = {
    parse_mode: 'Markdown',
    disable_web_page_preview: true
}

bot.command('start', ({ reply }) => {
    return reply('Добро пожаловать', mainKeyboard)
});

bot.hears('🔙 Назад', ({ reply }) => {
  return reply('💬', mainKeyboard);
});

/*
Блок акции
*/
bot.hears('🎁 Акция', ctx => {
    ctx.replyWithPhoto('https://i.imgur.com/YJ7f4OK.jpg', mainKeyboard)
        .then(() => ctx.reply('Хочешь быть в курсе новых акций и предложений?' +
        'Подписывайся на наш ' +
        '[инстаграм](https://www.instagram.com/studio_podruzhki/)!', opts))
})

/*
Блок цен
*/
const priceKeyboard = Markup.keyboard([
    ['👦 Мужчина'],
    ['👸 Женщина'],
    ['🔙 Назад']
]).oneTime().resize().extra()

const regionKeyboard = Markup.keyboard([
    ['Россия'],
    ['Казахстан'],
    ['Киргизия'],
    ['🔙 Назад']
]).oneTime().resize().extra()

let region = 0

bot.hears('💲 Цены', ({ reply }) => {
  return reply('Выберите свой регион:', regionKeyboard);
});

bot.hears('Россия', ({ reply }) => {
    region = 1;
    return reply('💬', priceKeyboard);
})

bot.hears('Казахстан', ({ reply }) => {
  region = 2;
  return reply('💬', priceKeyboard);
})

bot.hears('Киргизия', ({ reply }) => {
    region = 3;
    return reply('💬', priceKeyboard);
});

bot.hears('👦 Мужчина', ctx => {
    switch (region) {
        case 1:
            ctx.reply('★МИНИ ЗОНА (над губой/подбор-к) - 650₽\n' +
                '★БАКЕНБАРДЫ -  1290₽\n' +
                '★ЛИЦО полностью - 1690₽\n' +
                '★ШЕЯ - 1490₽\n' +
                '★РУКИ до локтя - 1750₽\n' +
                '★РУКИ полностью - 2490₽\n' +
                '★ПОДМЫШКИ - 1090₽\n' +
                '★ПЛЕЧИ - 1190₽\n' +
                '★ЖИВОТ полностью - 2490₽\n' +
                '★ЖИВОТ половина - 1490₽\n' +
                '★ГРУДЬ - 2290₽\n' +
                '★ОБЛАСТЬ ГРУДИНЫ по средней линии - 1890₽\n' +
                '★СПИНА (нижняя треть/крестец)  -  1490₽\n' +
                '★СПИНА половина -  2490₽\n' +
                '★СПИНА полностью - 3490₽\n' +
                '★БЕДРА полностью - 2990₽\n' +
                '★ГОЛЕНИ с коленями - 2290₽\n' +
                '★НОГИ полностью - 3990₽', priceKeyboard)
            break;
        case 2:
            ctx.reply('★МИНИ ЗОНА (над губой/подбор-к) - 3450₸\n' +
                '★БАКЕНБАРДЫ -  7250₸\n' +
                '★ЛИЦО полностью - 10750₸\n' +
                '★ШЕЯ - 10750₸\n' +
                '★РУКИ до локтя - 11650₸\n' +
                '★РУКИ полностью - 12950₸\n' +
                '★ПОДМЫШКИ - 7250₸\n' +
                '★ПЛЕЧИ - 6735₸\n' +
                '★ЖИВОТ полностью - 14350₸\n' +
                '★ЖИВОТ половина - 8450₸\n' +
                '★ГРУДЬ - 12950₸\n' +
                '★ОБЛАСТЬ ГРУДИНЫ по средней линии - 5037₸\n' +
                '★СПИНА (нижняя треть/крестец)  -  7250₸\n' +
                '★СПИНА половина -  13950₸\n' +
                '★СПИНА полностью - 19850₸\n' +
                '★БЕДРА полностью - 21950₸\n' +
                '★ГОЛЕНИ с коленями - 11650₸\n' +
                '★НОГИ полностью - 21950₸', priceKeyboard)
            break;
        case 3:
            ctx.reply('★МИНИ ЗОНА (над губой/подбор-к) - 650с\n' +
                '★БАКЕНБАРДЫ -  1290с\n' +
                '★ЛИЦО полностью - 1690с\n' +
                '★ШЕЯ - 1490с\n' +
                '★РУКИ до локтя - 1750с\n' +
                '★РУКИ полностью - 2490с\n' +
                '★ПОДМЫШКИ - 1090с\n' +
                '★ПЛЕЧИ - 1190с\n' +
                '★ЖИВОТ полностью - 2490с\n' +
                '★ЖИВОТ половина - 1490с\n' +
                '★ГРУДЬ - 2290с\n' +
                '★ОБЛАСТЬ ГРУДИНЫ по средней линии - 1890с\n' +
                '★СПИНА (нижняя треть/крестец)  -  1490с\n' +
                '★СПИНА половина -  2490с\n' +
                '★СПИНА полностью - 3490с\n' +
                '★БЕДРА полностью - 2990с\n' +
                '★ГОЛЕНИ с коленями - 2290с\n' +
                '★НОГИ полностью - 3990с', priceKeyboard)
            break;
    }
})

bot.hears('👸 Женщина', ctx => {
    switch (region) {
        case 1:
            ctx.reply('★МИНИ ЗОНА (над губой,щека,подбор-к) - 490₽\n' +
                '★ЛИЦО полностью - 1490₽\n' +
                '★РУКИ до локтя - 1590₽\n' +
                '★РУКИ полностью - 1750₽\n' +
                '★ПОДМЫШКИ - 990₽\n' +
                '★ЛИНИЯ ЖИВОТА - 890₽\n' +
                '★БИКИНИ КЛАССИКА - 990₽\n' +
                '★БИКИНИ ГЛУБОКОЕ - 1650₽\n' +
                '★БЕДРА полностью - 2290₽\n' +
                '★ЯГОДИЦЫ - 1650₽\n' +
                '★ГОЛЕНИ с коленями - 1990₽\n' +
                '★НОГИ полностью - 2990₽\n' +
                '⭐⭐⭐⭐⭐⭐⭐⭐\n' +
                '★ПРЕДЛОЖЕНИЕ ВСЕ ТЕЛО - 4990₽ (Ноги полностью, подмышки, бикини на выбор, линия живота или над губой или подбородок)\n' +
                '*Руки дополнительно - 990₽', priceKeyboard)
            break;
        case 2:
            ctx.reply('★ВСЕ ТЕЛО - 28550₸ (Ноги полностью, подмышки, бикини на выбор, линия живота или над губой или подбородок)\n' +
                'Руки дополнительно - 9950₸\n\n' +
                '⭐⭐⭐⭐⭐⭐⭐⭐\n' +
                '★МИНИ ЗОНА (над губой, подбор-к) - 2650₸\n' +
                '★ЩЕКИ - 5550₸\n' +
                '★ЛИЦО полностью - 8250₸\n' +
                '★РУКИ до локтя - 8950₸\n' +
                '★РУКИ полностью - 9950₸\n' +
                '★ПОДМЫШКИ - 5550₸\n' +
                '★ЛИНИЯ ЖИВОТА - 4950₸\n' +
                '★БИКИНИ КЛАССИКА - 5550₸\n' +
                '★БИКИНИ ГЛУБОКОЕ - 9350₸\n' +
                '★БЕДРА полностью - 16950₸\n' +
                '★БЕДРА внутренняя поверхность - 8250₸\n' +
                '★ЯГОДИЦЫ - 9350₸\n' +
                '★ГОЛЕНИ с коленями - 11250₸\n' +
                '★НОГИ полностью - 16950₸', priceKeyboard)
            break;
        case 3:
            ctx.reply('★МИНИ ЗОНА (над губой,щека,подбор-к) - 490с\n' +
                '★ЛИЦО полностью - 1490с\n' +
                '★РУКИ до локтя - 1590с\n' +
                '★РУКИ полностью - 1750с\n' +
                '★ПОДМЫШКИ - 990с\n' +
                '★ЛИНИЯ ЖИВОТА - 890с\n' +
                '★БИКИНИ КЛАССИКА - 990с\n' +
                '★БИКИНИ ГЛУБОКОЕ - 1650с\n' +
                '★БЕДРА полностью - 2290с\n' +
                '★ЯГОДИЦЫ - 1650с\n' +
                '★ГОЛЕНИ с коленями - 1990с\n' +
                '★НОГИ полностью - 2990с\n' +
                '⭐⭐⭐⭐⭐⭐⭐⭐\n' +
                '★ПРЕДЛОЖЕНИЕ ВСЕ ТЕЛО - 4990с (Ноги полностью, подмышки, бикини на выбор, линия живота или над губой или подбородок)\n' +
                '*Руки дополнительно - 990с', priceKeyboard)
            break;
    }
})

/*
Блок консультации
*/
var consultKeyboard = Markup.keyboard([
    ['Противопоказания'],
    ['Показания'],
    ['Уход после эпиляции'],
    ['Как это работает?'],
    ['Подготовка'],
    ['🔙 Назад']
]).oneTime().resize().extra()

bot.hears('📋 Консультация', ({ reply }) => {
    return reply('💬', consultKeyboard)
});

bot.hears('Противопоказания', ctx => {
  ctx.reply('ПРОТИВОПОКАЗАНИЯ К ЛАЗЕРНОЙ ЭПИЛЯЦИИ?\n ' +
        '★Абсолютные:\n' +
        '✔️Онкологические заболевания и кожные новообразования\n' +
        '✔️Сахарный диабет любого типа\n' +
        '✔️Тромбофлебит\n' +
        '✔️Смуглый цвет кожи или сильно загорелая кожа\n' +
        '✔️Седые, либо очень светлые волосы\n' +
        '✔️Сверхчувствительность\n' +
        '✔️Беременность и кормление грудью\n\n' +
        '★Относительные (могут быть сняты после обследования или консультации с врачом):\n' +
        '✔️При обострении хронических заболеваний кожи\n' +
        '✔️Когда в зоне обработки наблюдается скопление родинок или обширные родимые пятна\n' +
        '✔️Загорелая кожа\n' +
        '✔️Подверженность к появлению рубцов келоидного типа\n' +
        '✔️Дерматит или аллергия в обостренной форме \n' +
        '✔️Открытые раны, повреждения с нарушением целостности кожи\n' +
        '✔️Инфекционные заболевания с повышением температуры и ухудшением общего состояния организма', consultKeyboard)
})

bot.hears('Показания', ctx => {
    ctx.reply('ПОКАЗАНИЯ К ЛАЗЕРНОЙ ЭПИЛЯЦИИ?\n' +
        '✔️Волосы растут быстро и обильно, приходится часто бриться\n' +
        '✔️Надоело выщипывать волосы\n' +
        '✔️Кожа краснеет и возникает зуд из-за обработки её бритвенным станком\n' +
        '✔️Надоели вросшие волоски, нагноения и раздражения от воска или электродепилятора\n' +
        '✔️Испытываете жуткие боли в процессе депиляции воском или при шугаринге\n' +
        '✔️У Вас темные и жесткие волосы', consultKeyboard)
})

bot.hears('Уход после эпиляции', ctx => {
    ctx.reply('УХОД ПОСЛЕ ЛАЗЕРНОЙ ЭПИЛЯЦИИ\n ' +
            '✔️После процедуры удаления волос диодным лазером необходимо принять негорячий душ и смыть гель.\n' +
            '✔️Кожу можно увлажнять Бепантеном.\n' +
            '✔️Спустя пару дней можно бриться или пользоваться кремом для депиляции.', consultKeyboard)
})

bot.hears('Как это работает?', ctx => {
    ctx.reply('КАК РАБОТАЕТ ЛАЗЕРНАЯ ЭПИЛЯЦИЯ\n' +
            '⭐️Процедура лазерной эпиляции основывается на механизме избирательного нагревания, т.е. Поглощения светового импульса специальными мишенями, в данном случае – темным пигментом волос (меланином)\n' +
            '⭐️Поглощаемая меланином световая энергия лазера трансформируется в тепловую, вызывая изменение ростковых клеток луковицы и атрофию фолликула\n' +
            '⭐️При этом структуры, не содержащие пигмента , не повреждаются. Это объясняет неэффективность лазера на белые и седые волосы.', consultKeyboard)
})

bot.hears('Подготовка', ctx => {
    ctx.reply('ПОДГОТОВКА К ЛАЗЕРНОЙ ЭПИЛЯЦИИ \n' +
            '✔️За 2 недели до процедуры следует воздержаться от загара.\n' +
            '✔️Необходимо сбрить волосы на обрабатываемом участке кожи за день до сеанса. Высота выступающего кончика волоса не должна превышать 0,1 мм.\n' +
            '✔️Не стоит проводить депиляцию пинцетом, воском и другими подобными средствами в течение минимум 2 недель до лазерной эпиляции.\n' +
            '✔️Перед процедурой необходимо полностью очистить от косметических средств зону кожи, которая будет обрабатываться лазером.\n' +
            '✔️Не наносить обезболивающее средство.', consultKeyboard)
})

/*
Блок 'о нас'
*/
bot.hears('👥 О нас', ctx => {
    ctx.reply('Мы сеть салонов косметологии и лазерной эпиляции. Более 60 филиалов в России и СНГ.\n\n' +
        'Наши приоритеты в работе:\n' +
        'Профессионализм. Наши мастера отличаются большим опытом работы и постоянным стремлением к развитию и совершенствованием применяемых методик.\n\n' +
        'Доступность. Наша политика заключается в доступности стоимости услуг за счет снижения «ненужных» затрат. Мы не пытаемся «раздуть» авторитет за счет дорогой аренды в престижных местах, мы лучше вложим эти средства в качественную аппаратуру и применяемые косметические средства.\n\n' +
        'Качество. Мы работаем только с профессиональным оборудованием, имеющим высокие рейтинги на рынке по оказанию косметологических услуг. Каждая манипуляция проводится с максимальной точностью и щепетильностью.\n\n' +
        'Сервис. Для нас очень важно, чтобы каждый клиент был удовлетворен нашей работой. Мы всегда выслушаем конструктивную критику и сделаем все, чтобы наша работа стала еще лучше!\n\n' +
        'Подробнее на podruge.ru', mainKeyboard)
});

/*
Блок адресов
*/
bot.hears('☎ Контакты', ctx => {
    ctx.reply('Введите название своего города:', contactKeyboard);
  });

const contactKeyboard = Markup.keyboard([
    ['🔙 Назад']
]).oneTime().resize().extra()

bot.hears(/алматы/i, ctx => {
    ctx.replyWithLocation(43.227900, 76.863259, contactKeyboard)
        .then(() => ctx.reply('Алматы, 5-й микрорайон, д.17\n' +
            '8(7273)49-59-10\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/астана/i, ctx => {
    ctx.replyWithLocation(51.165889, 71.434993, contactKeyboard)
        .then(() => ctx.reply('Астана, ул. Кенесары, д.42\n' +
            '8(172)72-78-04\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/астрахань/i, ctx => {
    ctx.replyWithLocation(46.336863, 48.012913, contactKeyboard)
        .then(() => ctx.reply('Астрахань, ул. Набережная приволжского затона, д. 17 корпус 1\n' +
            '8(8512)62-25-31\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});


bot.hears(/барнаул/i, ctx => {
    ctx.replyWithLocation(53.359475, 83.675652, contactKeyboard)
        .then(() => ctx.reply('Барнаул, ул. Попова, 63\n' +
            '8(3852)22-23-80\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/бишкек/i, ctx => {
    ctx.replyWithLocation(42.873386, 74.587585, contactKeyboard)
        .then(() => ctx.reply('Бишкек, ул. Проспект Манаса д.30\n' +
            '996 550 738 538\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/белгород/i, ctx => {
    ctx.replyWithLocation(50.606471, 36.579291, contactKeyboard)
        .then(() => ctx.reply('Белгород, Проспект Богдана Хмельницкого 111  Б/Ц Энергомаш  \n' +
            '8(4722)21-92-52\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/брянск/i, ctx => {
    ctx.replyWithLocation(53.306632, 34.299214, contactKeyboard)
        .then(() => ctx.reply('Брянск, ул. 22 Съезда КПСС, дом 19\n' +
            '8(4832)30-01-27\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/владивосток/i, ctx => {
    ctx.replyWithLocation(43.110363, 131.934317, contactKeyboard)
        .then(() => ctx.reply('Владивосток, ул. Новоивановская 4а, Клиника Парацельс\n' +
            '8(423)200-11-53\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/воронеж/i, ctx => {
    ctx.replyWithLocation(43.110363, 131.934317, contactKeyboard)
        .then(() => ctx.reply('Воронеж, Проспект Революции 9А\n' +
            '8(473)212-00-67\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/волгоград/i, ctx => {
    ctx.replyWithLocation(48.696150, 44.507669, contactKeyboard)
        .then(() => ctx.replyWithLocation(48.717376, 44.508019))
        .then(() => ctx.reply('Волгоград, ул. Пугачёвская 5г\n' +
            'Волгоград, ул. Невская 11А\n' +
            '8-844-296-22-16\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/геленджик/i, ctx => {
    ctx.replyWithLocation(44.559195, 38.084606, contactKeyboard)
        .then(() => ctx.reply('Геленджик, ул. Островского, 37\n' +
            '8(8617)75-15-01\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/екатеринбург/i, ctx => {
    ctx.replyWithLocation(56.830453, 60.569878, contactKeyboard)
        .then(() => ctx.reply('Екатеринбург, ул. Крылова, 35 второй подъезд\n' +
            '8(343)300-31-82\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/ижевск/i, ctx => {
    ctx.replyWithLocation(56.834402, 53.222584, contactKeyboard)
        .then(() => ctx.reply('Ижевск, ул. Удмуртская, 141, Салон Аура Мед\n' +
            '8(3412)77-13-42\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/иркутск/i, ctx => {
    ctx.replyWithLocation(52.289896, 104.308858, contactKeyboard)
        .then(() => ctx.reply('Иркутск, ул. Фридриха Энгельса, 86\n' +
            '8(3952)41-51-75\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/казань/i, ctx => {
    ctx.replyWithLocation(55.787336, 49.115613, contactKeyboard)
        .then(() => ctx.replyWithLocation(55.829886, 49.092867))
        .then(() => ctx.reply('Казань, ул. Право-Булачная, 47\n' +
            'Казань, Пр. Ибрагимова,45 ,салон Раксаль\n' +
            '8(843)255-50-91\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/калининград/i, ctx => {
    ctx.replyWithLocation(54.724074, 20.498773, contactKeyboard)
        .then(() => ctx.reply('Калининград, Советский проспект, 14\n' +
            '8(4012)52-17-81\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/караганда/i, ctx => {
    ctx.replyWithLocation(49.797207, 73.090633, contactKeyboard)
        .then(() => ctx.reply('Караганда, Проспект Бухар Жырау, д.75\n' +
            '8(212)90-30-95\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/кемерово/i, ctx => {
    ctx.replyWithLocation(55.348841, 86.066752, contactKeyboard)
        .then(() => ctx.reply('Кемерово, ул. Рукавишникова, 14\n' +
            '8(384)267-27-71\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/киров/i, ctx => {
    ctx.replyWithLocation(58.597772, 49.675649, contactKeyboard)
        .then(() => ctx.reply('Киров, ул. Горбачева, 38, Центр мануальной терапии Совершенство\n' +
            '8(8332)78-42-81\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/краснодар/i, ctx => {
    ctx.replyWithLocation(45.032190, 38.972816, contactKeyboard)
        .then(() => ctx.reply('Краснодар, ул. Красная 87\n' +
            '8(861)205-35-38\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/красноярск/i, ctx => {
    ctx.replyWithLocation(56.005395, 92.847703, contactKeyboard)
        .then(() => ctx.reply('Красноярск, ул. Декабристов, 6\n' +
            '8(391)989-11-25\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/курск/i, ctx => {
    ctx.replyWithLocation(51.735075, 36.195018, contactKeyboard)
        .then(() => ctx.reply('Курск, ул. Можаевская 7А\n' +
            '8(9307)63-51-25\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/липецк/i, ctx => {
    ctx.replyWithLocation(52.586552, 39.547477, contactKeyboard)
        .then(() => ctx.reply('Липецк, ул. Проспект Победы, 110\n' +
            '8(4742)20-37-79\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/москва/i, ctx => {
    ctx.replyWithLocation(55.775338, 37.581981, contactKeyboard)
        .then(() => ctx.reply('Москва, м. Белорусская, пл.Тверской Заставы, д.3, 4 этаж, 401\n' +
            'Москва, м. Октябрьская, ул.Крымский Вал, д.3, строение 3\n' +
            'Москва, м. Добрынинская, ул. Люсиновская, дом 36, строение 1, кабинет №11\n' +
            'Москва, м. Таганская, ул. Гончарная набережная дом 1 стр.4\n' +
            'Москва, м. Чертановская, Северное Чертаново, микрорайон 2, корпус 203\n' +
            'Москва, м. Курская, ул.Земляной Вал, 3/1, строение 6\n' +
            'Москва, м. Парк победы, Площадь Победы, дом 1, корп. Д\n' +
            'Москва, м. Новые Черемушки, ул. Гарибальди, 36 (секция 2)\n' +
            'Москва, м. Академическая, Проспект 60-летия Октября, д. 18, корпус 1\n' +
            'Москва, м. Красносельская, ул. Нижняя Красносельская, дом 5/1\n' +
            'Москва, м. Киевская, ул. Брянская, дом 2\n' +
            'Москва, м. Киевская, ул. Набережная Тараса Шевченко 3 корп. 3\n' +
            'Москва, м. Братиславская, ул. Братиславская, д. 6\n' +
            '8(495)150-10-40\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/новокузнецк/i, ctx => {
    ctx.replyWithLocation(53.761684, 87.155968, contactKeyboard)
        .then(() => ctx.reply('Новокузнецк, ул. Франкфурта, 19\n' +
            '8(9234)64-50-39\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/нижний новгород/i, ctx => {
    ctx.replyWithLocation(56.329492, 44.010002, contactKeyboard)
        .then(() => ctx.reply('Нижний Новгород, ул. Верхне-Волжская набережная, д.2Б\n' +
            '8(383)383-55-70\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/новороссийск/i, ctx => {
    ctx.replyWithLocation(44.700448, 37.787884, contactKeyboard)
        .then(() => ctx.reply('Новороссийск, ул набережная, д. 53А\n' +
            '8(8617)75-15-02\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/новосибирск/i, ctx => {
    ctx.replyWithLocation(54.993293, 82.894046, contactKeyboard)
        .then(() => ctx.reply('Новосибирск, Микрорайон горский, дом 64 3 этаж оф.303\n' +
            'Новосибирск, ул. Фрунзе 234 медцентр "Центрика"\n' +
            '8(831)260-16-63\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/набережные челны/i, ctx => {
    ctx.replyWithLocation(55.758286, 52.404093, contactKeyboard)
        .then(() => ctx.reply('Набережные Челны, ул. Проспект Вахитова, 54В (46 комплекс)\n' +
            '8(8552)78-00-91\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/омск/i, ctx => {
    ctx.replyWithLocation(54.981381, 73.385046, contactKeyboard)
        .then(() => ctx.reply('Омск, ул.Пушкина, д.26\n' +
            '8(3812)20-73-05\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/оренбург/i, ctx => {
    ctx.replyWithLocation(51.827540, 55.158256, contactKeyboard)
        .then(() => ctx.reply('Оренбург, ул. Салмышская, д.34, к.5, пом.27, 2 этаж\n' +
            '8(3532)92-40-32\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/пенза/i, ctx => {
    ctx.replyWithLocation(53.182772, 45.015872, contactKeyboard)
        .then(() => ctx.reply('Пенза, ул. Кирова, 5 Клиника Бастом\n' +
            '8(8412)39-04-50\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/пермь/i, ctx => {
    ctx.replyWithLocation(58.017454, 56.248245, contactKeyboard)
        .then(() => ctx.reply('Пермь, ул. Советская, 21\n' +
            '8(342)200-85-08\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/санкт-петербург/i, ctx => {
    ctx.replyWithLocation(59.925547, 30.346483, contactKeyboard)
        .then(() => ctx.reply('Санкт-Петербург, м. Владимирская, ул. Большая Московская, д. 14\n' +
            'Санкт-Петербург, м. Петроградская, ул. Набережная реки Карповки, д. 13\n' +
            'Санкт-Петербург, м. Технологический институт, ул. Подольская, 23\n' +
            'Санкт-Петербург, м. Чернышевская, Ул. Кирочная, д.30\n' +
            '8(812)603-40-45\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/петербург/i, ctx => {
    ctx.replyWithLocation(59.925547, 30.346483, contactKeyboard)
        .then(() => ctx.reply('Санкт-Петербург, м. Владимирская, ул. Большая Московская, д. 14\n' +
            'Санкт-Петербург, м. Петроградская, ул. Набережная реки Карповки, д. 13\n' +
            'Санкт-Петербург, м. Технологический институт, ул. Подольская, 23\n' +
            'Санкт-Петербург, м. Чернышевская, Ул. Кирочная, д.30\n' +
            '8(812)603-40-45\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/спб/i, ctx => {
    ctx.replyWithLocation(59.925547, 30.346483, contactKeyboard)
        .then(() => ctx.reply('Санкт-Петербург, м. Владимирская, ул. Большая Московская, д. 14\n' +
            'Санкт-Петербург, м. Петроградская, ул. Набережная реки Карповки, д. 13\n' +
            'Санкт-Петербург, м. Технологический институт, ул. Подольская, 23\n' +
            'Санкт-Петербург, м. Чернышевская, Ул. Кирочная, д.30\n' +
            '8(812)603-40-45\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/ростов-на-дону/i, ctx => {
    ctx.replyWithLocation(47.230290, 39.724679, contactKeyboard)
        .then(() => ctx.reply('Ростов-на-Дону, ул. Красноармейская, 208\n' +
            '8(8633)22-12-90\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/ростов/i, ctx => {
    ctx.replyWithLocation(47.230290, 39.724679, contactKeyboard)
        .then(() => ctx.reply('Ростов-на-Дону, ул. Красноармейская, 208\n' +
            '8(8633)22-12-90\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/рязань/i, ctx => {
    ctx.replyWithLocation(54.622555, 39.748430, contactKeyboard)
        .then(() => ctx.reply('Рязань, ул. Горького дом 50 Медицинский центр «Симилия» \n' +
            '8(4912)51-14-30\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/самара/i, ctx => {
    ctx.replyWithLocation(53.202885, 50.146591, contactKeyboard)
        .then(() => ctx.reply('Самара, Московское шоссе, лит Б\n' +
            '8(846)226-51-60\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/саратов/i, ctx => {
    ctx.replyWithLocation(51.528968, 46.043123, contactKeyboard)
        .then(() => ctx.reply('Саратов, ул. Комсомольская 28/30\n' +
            '8(845)239-77-09\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/севастополь/i, ctx => {
    ctx.replyWithLocation(44.602711, 33.525620, contactKeyboard)
        .then(() => ctx.reply('Севастополь, ул. Ленина 72\n' +
            '8(869)277-70-85\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/симферополь/i, ctx => {
    ctx.replyWithLocation(44.948244, 34.089466, contactKeyboard)
        .then(() => ctx.reply('Симферополь, ул. Маяковского, 8\n' +
            '8(9652)77-76-73\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/сочи/i, ctx => {
    ctx.replyWithLocation(43.587562, 39.721220, contactKeyboard)
        .then(() => ctx.reply('Сочи, ул. Воровского, 20\n' +
            '8(8622)95-55-38\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/сургут/i, ctx => {
    ctx.replyWithLocation(61.238337, 73.437975, contactKeyboard)
        .then(() => ctx.reply('Сургут, ул. 30 лет Победы дом 62, салон красоты Дижон\n' +
            '8(3462)97-16-83\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/таганрог/i, ctx => {
    ctx.replyWithLocation(47.206623, 38.944088, contactKeyboard)
        .then(() => ctx.reply('Таганрог, ул. Греческая,19 / пер. Гарибальди 21\n' +
            '8(8632)70-82-30\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/тверь/i, ctx => {
    ctx.replyWithLocation(56.866204, 35.925569, contactKeyboard)
        .then(() => ctx.reply('Тверь, ул. Пожарная площадь, дом 1\n' +
            '8(9301)65-13-61\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/тольятти/i, ctx => {
    ctx.replyWithLocation(53.511483, 49.278684, contactKeyboard)
        .then(() => ctx.reply('Тольятти, ул. Юбилейная 43\n' +
            '8(8482)90-30-04\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/томск/i, ctx => {
    ctx.replyWithLocation(56.467384, 84.962624, contactKeyboard)
        .then(() => ctx.reply('Томск, ул. Вершинина,17А\n' +
            '8(3822)97-71-14\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/тула/i, ctx => {
    ctx.replyWithLocation(54.180683, 37.601915, contactKeyboard)
        .then(() => ctx.reply('Тула, ул. Проспект Ленина 66А\n' +
            '8(9307)91-23-18\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/тюмень/i, ctx => {
    ctx.replyWithLocation(57.156055, 65.536412, contactKeyboard)
        .then(() => ctx.reply('Тюмень, ул. Дзержинского 31\n' +
            '8(3452)57-99-78\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/улан-удэ/i, ctx => {
    ctx.replyWithLocation(51.804496, 107.652235, contactKeyboard)
        .then(() => ctx.reply('Улан-Удэ, ул. Мокрова 28А\n' +
            '8(3012)56-30-66\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/уфа/i, ctx => {
    ctx.replyWithLocation(54.746160, 55.957811, contactKeyboard)
        .then(() => ctx.reply('Уфа, ул. Ленина, 95\n' +
            '8(347)200-84-23\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/ульяновск/i, ctx => {
    ctx.replyWithLocation(54.311896, 48.386333, contactKeyboard)
        .then(() => ctx.reply('Ульяновск, ул. Льва Толстого, 67а\n' +
            '8(842)250-55-08\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', contactKeyboard, opts))
});

bot.hears(/хабаровск/i, ctx => {
    ctx.replyWithLocation(48.471389, 135.075483, contactKeyboard)
        .then(() => ctx.reply('Хабаровск, ул. Ленина 26, Клиника Здоровье\n' +
            '8(4212)93-25-35\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/чебоксары/i, ctx => {
    ctx.replyWithLocation(56.121235, 47.251474, contactKeyboard)
        .then(() => ctx.reply('Чебоксары, ул. Петрова, дом 5\n' +
            '8(8352)37-26-44\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/челябинск/i, ctx => {
    ctx.replyWithLocation(55.150345, 61.363648, contactKeyboard)
        .then(() => ctx.reply('Челябинск, ул. Лесопарковая, 6\n' +
            '8(3512)42-06-11\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/чита/i, ctx => {
    ctx.replyWithLocation(52.047030, 113.512152, contactKeyboard)
        .then(() => ctx.reply('Чита, ул. Бутина, 123\n' +
            '8(3022)71-03-41\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/энгельс/i, ctx => {
    ctx.replyWithLocation(51.497271, 46.122085, contactKeyboard)
        .then(() => ctx.reply('Энгельс, ул. Льва Кассиля, 47\n' +
            '8(8453)71-12-68\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

bot.hears(/ярославль/i, ctx => {
    ctx.replyWithLocation(57.631816, 39.877186, contactKeyboard)
        .then(() => ctx.reply('Ярославль, ул. Некрасова, 29\n' +
            '8(4852)60-91-04\n' + 'Наш сайт: podruge.ru\n' +
            'Инстаграм: [studio_podruzhki](https://www.instagram.com/studio_podruzhki/)', opts))
});

/*
Блок 'хочу записаться'
*/
bot.hears('📅 Хочу записаться', ctx => {
  ctx.reply('В данный момент этот раздел не работает', mainKeyboard)
});

bot.startWebhook('/webhook', null, PORT)
