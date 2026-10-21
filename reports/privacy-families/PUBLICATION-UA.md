> WITHDRAWN / historical candidate. The18+ optional-services restriction and instant free continuation were rejected by the owner. Current revenue/privacy model: [../revenue-privacy/RELEASE-UA.md](../revenue-privacy/RELEASE-UA.md). Do not apply the old families ZIP.

# Публікація повного сайту

Ціль: https://oleksiy-havryliuk.de/quiet-camp/privacy
Джерело сайту: kruty1918dev-ai/portfolio-oleksii-ha, не Unity docs/GitHub Pages.

Супровідний Termux-скрипт підготує свіжі клони, перевірить SHA-256, застосує повний накопичений патч сайту від main e2220fa і окремий патч гри від 030e76d. Сайт пушиться у main (дозвіл власника на публікацію надано); це може автоматично запустити Vercel Production. Гра пушиться лише в окрему гілку privacy/families-sequential. За новіших несумісних віддалених змін скрипт зупиняється без force push. Обидва дерева перевіряються до першого push. Дві віддалені операції не є атомарними: якщо другий push упав, скрипт показує, що вже відправлено.

Публікується повний сайт із чесними позначками кандидата політики. Статус готовності Android не змінюється. `npm run build` збирає цей публічний кандидат; `npm run build:release` вимагає докази й зараз має відмовити. Не обходити цю перевірку для фінальної політики.

Vercel: проєкт portfolio-oleksii-ha / прив’язка наявного домену. Якщо Git integration вже відстежує main, новий push достатній. В іншому разі в існуючому проєкті вибрати Production Branch main і Production Deployment з нового коміту. Root Directory: корінь репо, Framework: Other, Install: npm ci, Build: npm run build, Output: dist, Node: 22.x. Налаштування зафіксовані у package.json/vercel.json; не повертати старий Vite/Spark preset і SPA fallback. Не створювати другий проєкт із перехопленням домену без потреби.

STRATO DNS, MX, поштові скриньки, домен і власника не змінювати. Старий GitHub Pages guide залишається окремим сайтом.

Після статусу Ready перевірити зі звичайного браузера без Vercel login:

- /, /games, /portfolio, /about, /quiet-camp;
- /quiet-camp/privacy, /quiet-camp/privacy/uk, /quiet-camp/privacy/de;
- /privacy, /privacy/uk, /privacy/de;
- /impressum, /impressum/uk, /impressum/de;
- HTTPS 200, правильні canonical/hreflang, повний текст без JS, жодного noindex, мобільне меню й листування, невідомий шлях повертає 404.

У пакеті є verify-live.py: `python verify-live.py` після завершення Vercel deployment. Скрипт лише читає публічні HTTPS-сторінки, перевіряє наявність саме нової редакції політики, мови й посилання. Він не вмикає сервіси і не доводить юридичної готовності Android. Якщо старий production/404/захист deployment залишився, перевірка завершується помилкою, а не видає бажане за результат.

У цій сесії не виконано Vercel production deployment; безпосередній Git write у хмарі не авторизований інтеграцією. Передача через телефон використовує вже налаштований gh, без надсилання токенів у чат. Імена й наявні юридичні реквізити перенесені з owner-confirmed джерела; нових приватних адрес не шукали.
