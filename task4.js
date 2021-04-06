const stringify = require('csv-stringify');
const faker = require('faker');
const args = process.argv.slice(2);

if(args[1] === 'ru' || args[1] === 'en' || args[1] === 'uk') faker.locale = args[1] || 'en';

const enCountries = ['UK','United States','US','Germany','Sweden','France','Italy'];
const rusAddresses = ["Авиационная","Аграрная улица","Амурская улица","Амурский переулок","Антошкина улица","Артельная улица","Артёма улица","Артиллерийская улица","Архитектурная улица","Ауэрбаха улица","Бабушкина улица","Бакунина улица","Барыкина улица","Белого улица","Белорусская улица","Богданова улица","Борисенко улица","Бочкина улица","Бровки Петруся улица","Брянская улица","БССР 70 лет улица","Ватутина улица","Весенняя улица","Виноградная улица","Витебская 3-я улица","Владимирова улица","Войкова улица","Волгоградская улица","Волотова микрорайон","Волочаевская улица","Воровского улица","Восточная улица","Восточный микрорайон","Гагарина улица","Газеты Гомельская правда бульвар","Гастелло улица","Геофизиков проезд","Героев подпольщиков улица","Гоголя улица","Головацкого улица","Гомсельмашевская 2-я улица","Горная улица","Горького Максима улица","Госпитальная улица","Гражданская 1-я улица","Давыдовская улица","Дальняя улица","Дворникова улица","Джураева улица","Дзержинского улица","Димитрова улица","Днепропетровский переулок","Докутович улица","Дорожная улица","Дружбы улица","Дубравная улица","Дынды улица","Жарковского улица","Железнодорожный тупик","Жемчужная улица","Жукова улица","Завода Гомсельмаш 50 лет улица","Заводская 2-я улица","Зайцева улица","Западная улица","Западная 2-я улица","Ильича переулок","Ильича улица","Ильича 2-й переулок","Индустриальный проезд","Инженерный проезд","Иногородняя 3-я улица","Иногородняя 6-я улица","Иногородняя 7-я улица","Иногородняя 8-я улица","Интендантская улица","Интернациональная улица","Ирининская улица","Карповича улица","Катунина улица","Кирова улица","Кожара улица","Кооперативная улица","Косарева улица","Космическая улица","Котовского улица","Красный октябрь посёлок","Крестьянская улица","Кропоткина улица","Крылова улица","Лазурная улица","Ландышева улица","Ленина проспект","Ленинградская улица","Лепешинского улица","Лесная улица","Лещинская улица","Лещинский проезд","Линейная 4-я улица","Ломоносова Михаила улица","Луговая улица","Луначарского улица","Мазурова улица","Малайчука улица","Маневича улица","Мая 9 улица","Междугородняя улица","Международная улица","Мележа улица","Механическая улица","Минская улица","Могилёвская улица","Мозырская улица","Морозова Павлика улица","Набережная улица","Нагорная улица","Народная улица","Народного ополчения улица","Незалежности улица","Нижняя улица","Никольская улица","Новолюбенская 1-я улица","Новолюбенская 2-я улица","Новополесская улица","Новопрудковский проезд","Новосёлковая 7-я улица","Объездная улица","Огоренко улица","Октября проспект","Октября 30 лет улица","Оранжерейная улица","Осипова улица","Оськина улица","Пенязькова Д. Н. улица","Песина улица","Петровского улица","Пивоварова улица","Пинская улица","Плеханова улица","Победы проспект","Подгорная улица","Полевая улица","Полесская улица","Привокзальная улица","Прозрачная улица","Рабочая улица","Разина Степана улица","Революционная 1-я улица","Революционная 2-я улица","Республиканская улица","Речицкий проспект","Речная улица","Речной переулок","Ридного улица","Рогачёвская улица","Рокоссовского улица","Романовская улица","Свердлова улица","Светлая 2-я улица","Светлогорская улица","Свиридова улица","Севастопольская улица","Советская улица","Сосновая улица","Спартака переулок","Спортивная улица","СССР 60 лет улица","Старочерниговская улица","Старый аэродром микрорайон","Талалихина улица","Текстильная улица","Телегина улица","Тельмана улица","Тенистая улица","Терновая улица","Техническая улица","Тимофеенко улица","Толстого улица","Транспортный проезд","Троллейбусная улица","Трудовая улица","Украинская улица","Университетская улица","Урицкого улица","Урожайная 1-я улица","Урожайная 2-я улица","Уткина улица","Фадеева улица","Федосеенко улица","Федюнинского улица","Фестивальный микрорайон","Фрунзе улица","Фурманова улица","Хатаевича улица","Химакова улица","Химзаводская улица","Химическая улица","Хмельницкого Богдана улица","Хозяйственная улица","Хуторская улица","Царикова Бориса улица","Циолковского улица","Черниговская улица","Черноморская улица","Чернышевского улица","Черняховского улица","Чехова улица","Чкалова улица","Чкаловский проезд","Чонгарской дивизии улица","Шамякина Ивана улица","Шевченко улица","Шилова улица","Шмидта улица","Шоссейная улица","Электрический переулок","Электронная улица","Энгельса Фридриха улица","Энгельса Фридриха переулок","Юбилейная улица","Южная улица","Юношеская улица","Яговкина улица","Якубова улица","Ярославская улица","Ярославский проезд"];
const rusCities = ["Абаза","Абакан","Абдулино","Абинск","Агидель","Агрыз","Адыгейск","Азнакаево","Азов","Ак-Довурак","Аксай","Алагир","Алапаевск","Алатырь","Алдан","Алейск","Александров","Александровск","Александровск-Сахалинский","Алексеевка","Алексин","Алзамай","Алупка","Алушта","Альметьевск","Амурск","Анадырь","Анапа","Ангарск","Андреаполь","Анжеро-Судженск","Анива","Апатиты","Апрелевка","Апшеронск","Арамиль","Аргун","Ардатов","Ардон","Арзамас","Аркадак","Армавир","Армянск","Арсеньев","Арск","Артём","Артёмовск","Артёмовский","Архангельск","Асбест","Асино","Астрахань","Аткарск","Ахтубинск","Ачинск","Аша","Бабаево","Бабушкин","Бавлы","Багратионовск","Байкальск","Баймак","Бакал","Баксан","Балабаново","Балаково","Балахна","Балашиха","Балашов","Балей","Балтийск","Барабинск","Барнаул","Барыш","Батайск","Бахчисарай","Бежецк","БелаяКалитва","БелаяХолуница","Белгород","Белебей","Белинский","Белово","Белогорск","Белогорск","Белозерск","Белокуриха","Беломорск","Белорецк","Белореченск","Белоусово","Белоярский","Белый","Белёв","Бердск","Березники","Берёзовский","Берёзовский","Беслан","Бийск","Бикин","Билибино","Биробиджан","Бирск","Бирюсинск","Бирюч","Благовещенск(Амурскаяобласть)","Благовещенск(Башкортостан)","Благодарный","Бобров","Богданович","Богородицк","Богородск","Боготол","Богучар","Бодайбо","Бокситогорск","Болгар","Бологое","Болотное","Болохово","Болхов","БольшойКамень","Бор","Борзя","Борисоглебск","Боровичи","Боровск","Бородино","Братск","Бронницы","Брянск","Бугульма","Бугуруслан","Будённовск","Бузулук","Буинск","Буй","Буйнакск","Бутурлиновка","Валдай","Валуйки","Велиж","ВеликиеЛуки","ВеликийНовгород","ВеликийУстюг","Вельск","Венёв","Верещагино","Верея","Верхнеуральск","ВерхнийТагил","ВерхнийУфалей","ВерхняяПышма","ВерхняяСалда","ВерхняяТура","Верхотурье","Верхоянск","Весьегонск","Ветлуга","Видное","Вилюйск","Вилючинск","Вихоревка","Вичуга","Владивосток","Владикавказ","Владимир","Волгоград","Волгодонск","Волгореченск","Волжск","Волжский","Вологда","Володарск","Волоколамск","Волосово","Волхов","Волчанск","Вольск","Воркута","Воронеж","Ворсма","Воскресенск","Воткинск","Всеволожск","Вуктыл","Выборг","Выкса","Высоковск","Высоцк","Вытегра","ВышнийВолочёк","Вяземский","Вязники","Вязьма","ВятскиеПоляны","ГавриловПосад","Гаврилов-Ям","Гагарин","Гаджиево","Гай","Галич","Гатчина","Гвардейск","Гдов","Геленджик","Георгиевск","Глазов","Голицыно","Горбатов","Горно-Алтайск","Горнозаводск","Горняк","Городец","Городище","Городовиковск","Гороховец","ГорячийКлюч","Грайворон","Гремячинск","Грозный","Грязи","Грязовец","Губаха","Губкин","Губкинский","Гудермес","Гуково","Гулькевичи","Гурьевск","Гурьевск","Гусев","Гусиноозёрск","Гусь-Хрустальный","Давлеканово","ДагестанскиеОгни","Далматово","Дальнегорск","Дальнереченск","Данилов","Данков","Дегтярск","Дедовск","Демидов","Дербент","Десногорск","Джанкой","Дзержинск","Дзержинский","Дивногорск","Дигора","Димитровград","Дмитриев","Дмитров","Дмитровск","Дно","Добрянка","Долгопрудный","Долинск","Домодедово","Донецк","Донской","Дорогобуж","Дрезна","Дубна","Дубовка","Дудинка","Духовщина","Дюртюли","Дятьково","Евпатория","Егорьевск","Ейск","Екатеринбург","Елабуга","Елец","Елизово","Ельня","Еманжелинск","Емва","Енисейск","Ермолино","Ершов","Ессентуки","Ефремов","Железноводск","Железногорск(Красноярскийкрай)","Железногорск(Курскаяобласть)","Железногорск-Илимский","Жердевка","Жигулёвск","Жиздра","Жирновск","Жуков","Жуковка","Жуковский","Завитинск","Заводоуковск","Заволжск","Заволжье","Задонск","Заинск","Закаменск","Заозёрный","Заозёрск","ЗападнаяДвина","Заполярный","Зарайск","Заречный(Пензенскаяобласть)","Заречный(Свердловскаяобласть)","Заринск","Звенигово","Звенигород","Зверево","Зеленогорск","Зеленоградск","Зеленодольск","Зеленокумск","Зерноград","Зея","Зима","Златоуст","Злынка","Змеиногорск","Знаменск","Зубцов","Зуевка","Ивангород","Иваново","Ивантеевка","Ивдель","Игарка","Ижевск","Избербаш","Изобильный","Иланский","Инза","Инкерман","Иннополис","Инсар","Инта","Ипатово","Ирбит","Иркутск","Исилькуль","Искитим","Истра","Ишим","Ишимбай","Йошкар-Ола","Кадников","Казань","Калач","Калач-на-Дону","Калачинск","Калининград","Калининск","Калтан","Калуга","Калязин","Камбарка","Каменка","Каменногорск","Каменск-Уральский","Каменск-Шахтинский","Камень-на-Оби","Камешково","Камызяк","Камышин","Камышлов","","\t","","Канаш","Кандалакша","Канск","Карабаново","Карабаш","Карабулак","Карасук","Карачаевск","Карачев","Каргат","Каргополь","Карпинск","Карталы","Касимов","Касли","Каспийск","Катав-Ивановск","Катайск","Качканар","Кашин","Кашира","Кедровый","Кемерово","Кемь","Керчь","Кизел","Кизилюрт","Кизляр","Кимовск","Кимры","Кингисепп","Кинель","Кинешма","Киреевск","Киренск","Киржач","Кириллов","Кириши","Киров(Калужскаяобласть)","Киров(Кировскаяобласть)","Кировград","Кирово-Чепецк","Кировск(Ленинградскаяобласть)","Кировск(Мурманскаяобласть)","Кирс","Кирсанов","Киселёвск","Кисловодск","Клин","Клинцы","Княгинино","Ковдор","Ковров","Ковылкино","Когалым","Кодинск","Козельск","Козловка","Козьмодемьянск","Кола","Кологрив","Коломна","Колпашево","Кольчугино","Коммунар","Комсомольск","Комсомольск-на-Амуре","Конаково","Кондопога","Кондрово","Константиновск","Копейск","Кораблино","Кореновск","Коркино","Королёв","Короча","Корсаков","Коряжма","Костерёво","Костомукша","Кострома","Котельники","Котельниково","Котельнич","Котлас","Котово","Котовск","Кохма","Красавино","Красноармейск","Красноармейск(Саратовскаяобласть)","Красновишерск","Красногорск","Краснодар","Краснозаводск","Краснознаменск(Калининградскаяобласть)","Краснознаменск","Краснокаменск","Краснокамск","Красноперекопск","Краснослободск(Волгоградскаяобласть)","Краснослободск(Мордовия)","Краснотурьинск","Красноуральск","Красноуфимск","Красноярск","КрасныйКут","КрасныйСулин","КрасныйХолм","Кремёнки","Кропоткин","Крымск","Кстово","Кубинка","Кувандык","Кувшиново","Кудымкар","Кузнецк","Куйбышев","Кулебаки","Кумертау","Кунгур","Купино","Курган","Курганинск","Курильск","Курлово","Куровское","Курск","Куртамыш","Курчатов","Куса","Кушва","Кызыл","Кыштым","Кяхта","Лабинск","Лабытнанги","Лагань","Ладушкин","Лаишево","Лакинск","Лангепас","Лахденпохья","Лебедянь","Лениногорск","Ленинск","Ленинск-Кузнецкий","Ленск","Лермонтов","Лесной","Лесозаводск","Лесосибирск","Ливны","Ликино-Дулёво","Липецк","Липки","Лиски","Лихославль","Лобня","ЛодейноеПоле","Лосино-Петровский","Луга","Луза","Лукоянов","Луховицы","Лысково","Лысьва","Лыткарино","Льгов","Любань","Люберцы","Любим","Людиново","Лянтор","Магадан","Магас","Магнитогорск","Майкоп","Майский","Макаров","Макарьев","Макушино","МалаяВишера","Малгобек","Малмыж","Малоархангельск","Малоярославец","Мамадыш","Мамоново","Мантурово","Мариинск","МариинскийПосад","Маркс","Махачкала","Мглин","Мегион","Медвежьегорск","Медногорск","Медынь","Межгорье","Междуреченск","Мезень","Меленки","Мелеуз","Менделеевск","Мензелинск","Мещовск","Миасс","Микунь","Миллерово","МинеральныеВоды","Минусинск","Миньяр","Мирный(Архангельскаяобласть)","Мирный(Якутия)","Михайлов","Михайловка","Михайловск(Свердловскаяобласть)","Михайловск(Ставропольскийкрай)","Мичуринск","Могоча","Можайск","Можга","Моздок","Мончегорск","Морозовск","Моршанск","Мосальск","Муравленко","Мураши","Мурманск","Муром","Мценск","Мыски","Мытищи","Мышкин","НабережныеЧелны","Навашино","Наволоки","Надым","Назарово","Назрань","Называевск","Нальчик","Нариманов","Наро-Фоминск","Нарткала","Нарьян-Мар","Находка","Невель","Невельск","Невинномысск","Невьянск","Нелидово","Неман","Нерехта","Нерчинск","Нерюнгри","Нестеров","Нефтегорск","Нефтекамск","Нефтекумск","Нефтеюганск","Нея","Нижневартовск","Нижнекамск","Нижнеудинск","НижниеСерги","НижнийЛомов","НижнийНовгород","НижнийТагил","НижняяСалда","НижняяТура","Николаевск","Николаевск-на-Амуре","Никольск(Вологодскаяобласть)","Никольск(Пензенскаяобласть)","Никольское","НоваяЛадога","НоваяЛяля","Новоалександровск","Новоалтайск","Новоаннинский","Нововоронеж","Новодвинск","Новозыбков","Новокубанск","Новокузнецк","Новокуйбышевск","Новомичуринск","Новомосковск","Новопавловск","Новоржев","Новороссийск","Новосибирск","Новосиль","Новосокольники","Новотроицк","Новоузенск","Новоульяновск","Новоуральск","Новохопёрск","Новочебоксарск","Новочеркасск","Новошахтинск","НовыйОскол","НовыйУренгой","Ногинск","Нолинск","Норильск","Ноябрьск","Нурлат","Нытва","Нюрба","Нягань","Нязепетровск","Няндома","Облучье","Обнинск","Обоянь","Обь","Одинцово","Озёрск(Калининградскаяобласть)","Озёрск(Челябинскаяобласть)","Озёры","Октябрьск","Октябрьский","Окуловка","Оленегорск","Олонец","Олёкминск","Омск","Омутнинск","Онега","Опочка","Оренбург","Орехово-Зуево","Орлов","Орск","Орёл","Оса","Осинники","Осташков","Остров","Островной","Острогожск","Отрадное","Отрадный","Оха","Оханск","Очёр","Павлово","Павловск","ПавловскийПосад","Палласовка","Партизанск","Певек","Пенза","Первомайск","Первоуральск","Перевоз","Пересвет","Переславль-Залесский","Пермь","Пестово","ПетровВал","Петровск","Петровск-Забайкальский","","\t","","Петрозаводск","Петропавловск-Камчатский","Петухово","Петушки","Печора","Печоры","Пикалёво","Пионерский","Питкяранта","Плавск","Пласт","Плёс","Поворино","Подольск","Подпорожье","Покачи","Покров","Покровск","Полевской","Полесск","Полысаево","ПолярныеЗори","Полярный","Поронайск","Порхов","Похвистнево","Почеп","Починок","Пошехонье","Правдинск","Приволжск","Приморск(Калининградскаяобласть)","Приморск(Ленинградскаяобласть)","Приморско-Ахтарск","Приозерск","Прокопьевск","Пролетарск","Протвино","Прохладный","Псков","Пугачёв","Пудож","Пустошка","Пучеж","Пушкино","Пущино","Пыталово","Пыть-Ях","Пятигорск","Радужный(Владимирскаяобласть)","Радужный(Ханты-МансийскийАО–Югра)","Райчихинск","Раменское","Рассказово","Ревда","Реж","Реутов","Ржев","Родники","Рославль","Россошь","Ростов","Ростов-на-Дону","Рошаль","Ртищево","Рубцовск","Рудня","Руза","Рузаевка","Рыбинск","Рыбное","Рыльск","Ряжск","Рязань","Саки","Салават","Салаир","Салехард","Сальск","Самара","Санкт-Петербург","Саранск","Сарапул","Саратов","Саров","Сасово","Сатка","Сафоново","Саяногорск","Саянск","Светлогорск","Светлоград","Светлый","Светогорск","Свирск","Свободный","Себеж","Севастополь","Северо-Курильск","Северобайкальск","Северодвинск","Североморск","Североуральск","Северск","Севск","Сегежа","Сельцо","Семикаракорск","Семилуки","Семёнов","Сенгилей","Серафимович","Сергач","СергиевПосад","Сердобск","Серов","Серпухов","Сертолово","Сибай","Сим","Симферополь","Сковородино","Скопин","Славгород","Славск","Славянск-на-Кубани","Сланцы","Слободской","Слюдянка","Смоленск","Снежинск","Снежногорск","Собинка","Советск(Калининградскаяобласть)","Советск(Кировскаяобласть)","Советск(Тульскаяобласть)","СоветскаяГавань","Советский","Сокол","Солигалич","Соликамск","Солнечногорск","Соль-Илецк","Сольвычегодск","Сольцы","Сорочинск","Сорск","Сортавала","Сосенский","Сосновка","Сосновоборск","СосновыйБор","Сосногорск","Сочи","Спас-Деменск","Спас-Клепики","Спасск","Спасск-Дальний","Спасск-Рязанский","Среднеколымск","Среднеуральск","Сретенск","Ставрополь","СтараяКупавна","СтараяРусса","Старица","Стародуб","СтарыйКрым","СтарыйОскол","Стерлитамак","Стрежевой","Строитель","Струнино","Ступино","Суворов","Судак","Суджа","Судогда","Суздаль","Суоярви","Сураж","Сургут","Суровикино","Сурск","Сусуман","Сухиничи","СухойЛог","Сызрань","Сыктывкар","Сысерть","Сычёвка","Сясьстрой","Тавда","Таганрог","Тайга","Тайшет","Талдом","Тамбов","Тара","Тарко-Сале","Таруса","Татарск","Таштагол","Тверь","Теберда","Тейково","Темников","Темрюк","Терек","Тетюши","Тимашёвск","Тихвин","Тихорецк","Тобольск","Тогучин","Тольятти","Томари","Томмот","Томск","Топки","Торжок","Торопец","Тосно","Тотьма","Троицк","Трубчевск","Трёхгорный","Туапсе","Туймазы","Тула","Тулун","Туран","Туринск","Тутаев","Тында","Тырныауз","Тюкалинск","Тюмень","Уварово","Углегорск","Углич","Удачный","Удомля","Ужур","Узловая","Улан-Удэ","Ульяновск","Унеча","Урай","Урень","Уржум","Урус-Мартан","Урюпинск","Усинск","Усмань","Усолье","Усолье-Сибирское","Уссурийск","Усть-Джегута","Усть-Илимск","Усть-Катав","Усть-Кут","Усть-Лабинск","Устюжна","Уфа","Ухта","Учалы","Уяр","Фатеж","Феодосия","Фокино","Фролово","Фрязино","Фурманов","Хабаровск","Хадыженск","Ханты-Мансийск","Харабали","Харовск","Хасавюрт","Хвалынск","Хилок","Химки","Холм","Холмск","Хотьково","Цивильск","Цимлянск","Циолковский","Чадан","Чайковский","Чапаевск","Чаплыгин","Чебаркуль","Чебоксары","Чегем","Чекалин","Челябинск","Чердынь","Черемхово","Черепаново","Череповец","Черкесск","Черноголовка","Черногорск","Чернушка","Черняховск","Чехов","Чистополь","Чита","Чкаловск","Чудово","Чулым","Чусовой","Чухлома","Чёрмоз","Шагонар","Шадринск","Шали","Шарыпово","Шарья","Шатура","Шахты","Шахтёрск","Шахунья","Шацк","Шебекино","Шелехов","Шенкурск","Шилка","Шимановск","Шиханы","Шлиссельбург","Шумерля","Шумиха","Шуя","Щигры","Щучье","Щёкино","Щёлкино","Щёлково","Электрогорск","Электросталь","Электроугли","Элиста","Энгельс","Эртиль","Югорск","Южа","Южно-Сахалинск","Южно-Сухокумск","Южноуральск","Юрга","Юрьев-Польский","Юрьевец","Юрюзань","Юхнов","Ядрин","Якутск","Ялта","Ялуторовск","Янаул","Яранск","Яровое","Ярославль","Ярцево","Ясногорск","Ясный","Яхрома,"];

const ukAddresses = [ "Авіаційна", "Аграрна вулиця", "Амурська вулиця", "Амурський провулок", "Антошкіна вулиця", "Артельная вулиця", "Артема вулиця", "Артилерійська вулиця", "Архітектурна вулиця", "Ауербаха вулиця", "Бабусина вулиця", "Бакуніна вулиця", "Барикіна вулиця", "Білого вулиця", "Білоруська вулиця", "Богданова вулиця", "Борисенко вулиця", "Бочкіна вулиця", "Бровки Петруся вулиця", "Брянська вулиця" , "БССР 70 років вулиця", "Ватутіна вулиця", "Весняна вулиця", "Виноградна вулиця", "Вітебська 3-тя вулиця", "Владимирова вулиця", "Войкова вулиця", "Волгоградська вулиця", "Волотова мікрорайон" , "Волочаївська вулиця", "Воровського вулиця", "Східна вулиця", "Східний мікрорайон", "Гагаріна вулиця", "Газети Гомельська правда бульвар", "Гастелло вулиця", "Геофизиков проїзд", "Героїв підпільників вулиця", " Гоголя вулиця "," Головацького вулиця "," Гомсельмашевская 2-я вулиця "," Гірська вулиця "," Горького Максима вулиця "," Госпітальна вулиця "," Громадянська 1-я вулиця "," Давидівська вулиця "," Далека вулиця " , "Дворнікова вулиця", "Джураєва вулиця", "Дзержинського вулиця", "Димитрова вулиця", "Дніпром ропетровскій провулок "," Докутовіч вулиця "," Дорожня вулиця "," Дружби вулиця "," Дубравная вулиця "," Динди вулиця "," Жарковський вулиця "," Залізничний тупик "," Перлова вулиця "," Жукова вулиця "," заводу Гомсельмаш 50 років вулиця "," Заводська 2-я вулиця "," Зайцева вулиця "," Західна вулиця "," Західна 2-я вулиця "," Ілліча провулок "," Ілліча вулиця "," Ілліча 2-й провулок " , "Індустріальний проїзд", "Інженерний проїзд", "Іногородня 3-тя вулиця", "Іногородня 6-я вулиця", "Іногородня 7-а вулиця", "Іногородня 8-я вулиця", "інтендантського вулиця", "Інтернаціональна вулиця "," Ірининська вулиця "," Карповича вулиця "," Катуніна вулиця "," Кірова вулиця "," Кожара вулиця "," Кооперативна вулиця "," Косарєва вулиця "," Космічна вулиця "," Котовського вулиця "," Червоний жовтень селище "," Селянська вулиця "," Кропоткіна вулиця "," Крилова вулиця "," Лазурна вулиця "," Ландишева вулиця "," Леніна проспект "," Ленінградська вулиця "," Лепешинського вулиця "," Лісова вулиця "," Ліщинська вулиця "," Лещинський проїзд "," Лінійна 4-я вулиця "," Ломоносова Михаила улица "," Лугова вулиця "," Луначарський ого вулиця "," Мазурова вулиця "," Малайчука вулиця "," Маневича вулиця "," Мая 9 вулиця "," Міжміський вулиця "," Міжнародна вулиця "," Мележа вулиця "," Механічна вулиця "," Мінська вулиця ", "Могилевська вулиця", "Мозирська вулиця", "Морозова Павлика вулиця", "Набережна вулиця", "Нагірна вулиця", "Народна вулиця", "Народного ополчення вулиця", "Незалежності вулиця", "Нижня вулиця", "Микільська вулиця "," Новолюбенская 1-я вулиця "," Новолюбенская 2-я вулиця "," Новополесская вулиця "," Новопрудковскій проїзд "," Новосёлковая 7-а вулиця "," Об'їзна вулиця "," Огоренко вулиця "," Жовтня проспект " , "Жовтня 30 років вулиця", "Оранжерейна вулиця", "Осипова вулиця", "Оськина вулиця", "Пенязькова Д. Н. вулиця", "Песина вулиця", "Петровського вулиця", "Пивоварова вулиця", "Пінська вулиця "," Плеханова вулиця "," Перемоги проспект "," Підгірна вулиця "," Польова вулиця "," Поліська вулиця "," Привокзальна вулиця "," Прозора вулиця "," Робоча вулиця "," Разіна Степана вулиця "," Революційна 1-а вулиця "," Революційна 2-я вулиця "," Республіканська вулиця "," Речицький проспект "," Річкова вулиця ", "Річковий провулок", "Рідного вулиця", "Рогачёвская вулиця", "Рокосовського вулиця", "Романовська вулиця", "Свердлова вулиця", "Світла 2-я вулиця", "Светлогорская вулиця", "Свиридова вулиця", "Севастопольська вулиця "," Радянська вулиця "," Соснова вулиця "," Спартака провулок "," Спортивна вулиця "," СРСР 60 років вулиця "," Старочерніговская вулиця "," Старий аеродром мікрорайон "," Талалихіна вулиця "," Текстильна вулиця " , "Телегіна вулиця", "Тельмана вулиця", "Тіниста вулиця", "Тернова вулиця", "Технічна вулиця", "Тимофієнко вулиця", "Толстого вулиця", "Транспортний проїзд", "Тролейбусна вулиця", "Трудова вулиця" , "Українська вулиця", "Університетська вулиця", "Урицького вулиця", "Урожайна 1-я вулиця", "Урожайна 2-я вулиця", "Уткіна вулиця", "Фадєєва вулиця", "Федосеенко вулиця", "Федюнинского вулиця "," Фестивальний мікрорайон "," Фрунзе вулиця "," Фурманова вулиця "," Хатаєвича вулиця "," Хімакова вулиця "," Хімзаводская вулиця "," Хімічна вулиця "," Хмельницького Богдана вулиця "," Господарська вулиця "," Хутірська вулиця "," Царікова Бориса вулиця "," Ціолковського вулиця "," Черні Виговського вулиця "," Чорноморська вулиця "," Чернишевського вулиця "," Черняховського вулиця "," Чехова вулиця "," Чкалова вулиця "," Чкаловський проїзд "," Чонгарському дивізії вулиця "," Шамякіна Івана вулиця "," Шевченко вулиця " , "Шилова вулиця", "Шмідта вулиця", "Шосейна вулиця", "Електричний провулок", "Електронна вулиця", "Енгельса Фрідріха вулиця", "Енгельса Фрідріха провулок", "Ювілейна вулиця", "Південна вулиця", "Юнацька вулиця "," Яговкіна вулиця "," Якубова вулиця "," Ярославська вулиця "," Ярославський проїзд "];
const ukCities = ['Київ', 'Харків', 'Одеса', 'Дніпро', 'Донецьк', 'Запоріжжя', 'Львів', 'Кривий', 'Ріг', 'Миколаїв', 'Севастополь', 'Маріуполь', 'Луганск','Вінніца', 'Макіївка', 'Сімферополь', 'Херсон', 'Чернігів', 'Полтава', 'Черкаси', 'Хмельницький', 'Чернівці', 'Житомир', 'Суми', 'Рівне', 'Горлівка', 'Івано', 'Франківськ','Тернопіль', 'Кременчук', 'Луцьк', 'Біла', 'Краматорськ', 'Мелітополь', 'Керч', 'Ужгород', 'Бердянськ', 'Нікополь', 'Євпаторія', 'Бровари'];

const staticCity = {
    'ru': () => rusCities[Math.trunc(Math.random() * rusCities.length)],
    'uk': () => ukCities[Math.trunc(Math.random() * ukCities.length)]
}
const staticAddress = {
    'ru': () => rusAddresses[Math.trunc(Math.random() * rusAddresses.length)] + ' ' + Math.trunc(Math.random() * 200),
    'uk': () => ukAddresses[Math.trunc(Math.random() * ukAddresses.length)] + ' ' + Math.trunc(Math.random() * 200)
}

const someData = [...new Array(+args[0])].map(() => {
    let {name,address} = faker.helpers.userCard();
    let {street, city, zipcode, country,suite} = address;
    country = faker.locale === 'ru' ? 'Россия' : faker.locale === 'uk' ? 'Україна' : faker.locale==='en' ? enCountries[Math.trunc(Math.random() * enCountries.length)] : country;
    city = faker.locale === 'ru' ? staticCity.ru() : faker.locale === 'uk' ? staticCity.uk() : city;
    street = faker.locale === 'ru' ? staticAddress.ru() : faker.locale === 'uk' ? staticAddress.uk() : faker.locale === 'en' ? street + ' ' + suite : street;
    return {name, country, city, street,zipcode};
});

let out = "";
stringify(someData, function (err, output) {
    console.log(output)
}, {delimiter: ';'});

console.log(out)