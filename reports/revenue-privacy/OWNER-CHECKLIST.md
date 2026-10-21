# Дії власника перед релізом

Повторного підтвердження вже наданих імені, юридичної адреси та працездатності пошти не потрібно. Не надсилайте паролі, токени, ключі або документи.

## 1. Доходи AdMob — спочатку робоча основа для 16+

- Створити/перевірити Android app `com.quietcamp.game`, статус готовності AdMob і власний App ID та Rewarded ad-unit ID. App ID у GoogleMobileAdsSettings має належати цій грі; unit ID у `google_services.json` — вашому publisher account. Не використовувати Google sample IDs для доходу.
- У AdMob Privacy & messaging створити й опублікувати потрібну UMP message; звірити країни, мови, постачальників, партнерів/медіацію, вибір/відкликання. У грі перевірити cold start, кнопки погодитися/відмовити, storage signals, `CanRequestAds`, повторне відкриття privacy options.
- Перевірити 16–17 як Teen/NPA та дорослих як NPA. Це базова рекламна можливість; не чекає на завершення Pro. Відмовити Analytics і Crashlytics та переконатися, що дозволене рекламне відео все одно показує й зберігає нагороду.
- У Play developer website вказати цей домен. З власним AdMob publisher ID виконати в репозиторії сайту `npm run admob:publisher -- pub-<16 цифр>`; перевірити файл/commit та опублікувати сайт. Звірити `https://oleksiy-havryliuk.de/app-ads.txt` і статус перевірки в AdMob; сторонні seller records не вигадувати.
- Лише після реальних перевірок перевести sample mode у виробничі units та задокументувати й відкрити відповідні source/legal approvals. Не просто поміняти усі false на true.

## 2. Дохід у 13–15 і після storage refusal — додатковий LTD шлях

- Перевірити реальні Google LTD/programmatic LTD налаштування, підтримку потрібного інвентарю, поставщиків, Child treatment, G та відсутність рекламного ID. Гарантії fill/eCPM немає.
- Оцінити необхідність/пропорційність контекстної доставки й fraud prevention, Art 6(1)(f), інтереси дітей, §25 TDDDG та фактичне anti-fraud storage. Скласти задокументовану оцінку; не вважати Google довідку юридичним звільненням.
- У нативному Android підтвердити `gad_has_consent_for_cookies=0` до ініціалізації, фактичний мережевий режим, TFUA, відсутність дорослого CMP для 13–15, refusal/CanRequestAds=false та повернення до нормального режиму після коректної зміни віку/згод.
- Тільки за відповідними доказами: `limitedAdsReviewed` + `limitedAdsEnabled`; для 13–15 додатково `underAgeAdvertisingReviewed` + `underAgeLimitedAdsEnabled`. Ці перевірки не блокують незалежний перевірений 16+ NPA шлях.
- Персоналізація дорослим — необов’язкова подальша можливість: окремі `adultPersonalizationReviewed`/`adultPersonalizationEnabled`, лише 18+, UMP та фактичні vendor/purpose choices. Для підлітків завжди заборонено.

## 3. Google Play і нативний артефакт

- Вибрати справжні target-age groups для первинної 13+ аудиторії. Разом перевірити store listing, IARC/USK, післявоєнну тематику, фактичну дитячу привабливість і Families/локальні дитячі обов’язки. Можливість локального fallback до 13 не дорівнює автоматичному вибору всіх груп Play.
- Після окремого дозволу на build: release artifact SHA-256, merged manifest/permissions, розв’язані native versions; app ID/units, Android Auto Backup/exclusion rules; виміряти трафік/файли до privacy/age, усі відмови/групи/згоди, відновлення збереження, reinstall, crash queues. Кодова відмова collection не доводить відсутності раннього native storage.
- Перевірити реальний Boot UI на телефоні, орієнтації/safe area, Back, доступність Settings/документів до optional choices, TalkBack. Виконати reward/cancel/offline/timeout/save-fail сценарії. Стара збірка не доводить нові C# зміни.
- На A52 перевірити FPS/нагрівання та окремий патч оптимізації: портативні хмарні заміри не є FPS і не доводять утримання гравців.
- Заповнити Data Safety за реальним артефактом і всіма дозволеними гілками, включно з optional collection/sharing. Нічого автоматично не подано.

## 4. Firebase, договори та операційні процедури

- GA4: справді встановити 2 місяці для охоплених event/user-level data; перевірити reset-on-new-activity, exports/sharing/linked products. Агреговані звіти/SDK IDs — інші строки.
- Crashlytics: незалежний upload opt-in, send/deleteUnsents після перезапуску та відкликання, локальні файли, breadcrumbs. Google описує початок видалення охоплених crash data після 90 днів, а не знищення всіх копій точно на день 90.
- Підтвердити Google/Vercel/STRATO договори, ролі, міжнародні гарантії, фактичні hosting/mail log/backup retention; виконувати support deletion через 12 місяців після закриття з законними винятками.
- Ідентифікація псевдонімних запитів, доступ/видалення, відповіді на права та випадки достовірно відомого неправильного віку. Не збирати документи про всяк випадок.

## 5. Pro — окремий наступний реліз або завершена реальна інтеграція

Власник обрав ID `quietcamp_pro` 21.10.2026. Каталог патча підготовлено з цим ID та published=false. Товар у Play Console ще не створений. Специфікація — `reports/monetization-review/quietcamp-pro-product.json` у репозиторії гри. Це одноразовий non-consumable. Без підписки: без ресурсних лімітів/лічильників та реклами. Не обіцяти автоматичний доступ до всіх майбутніх DLC без окремого рішення (нинішній JourneyAccess може успадковувати Pro). Створити реальний товар/ціну, додати справжній Billing провайдер і серверну перевірку, acknowledgment після довговічного grant, restore, pending/cancel/refund/revoke, неприв’язану до tracking покупку та відповідні умови/дані. Покупки неповнолітніх — окрема перевірка. Цього патча недостатньо для продажів, а advertised fake storefront не додано.

## 6. Остаточний текст і публікація

Після evidence для вибраних активних сервісів остаточно вирівняти EN/UK/DE, оновити bundle/hash, `legal/release-evidence.json`, пройти `npm run release:check`, побудувати через `npm run build:release`, узгодити metadata гри та публікувати. Загальний сайт і чесний кандидат можна публікувати зараз; production Android clearance не можна одержати простим видаленням плашки. Налаштувати Vercel Build Command на `npm run build:release` для фінального допущеного випуску після перевірок. Якщо змінилась лише політика — не лишати стару ревізію в грі.

Додатково: допуск LTD/персоналізації в `release:check` умовний і потрібен лише для вибраної активної можливості. Вимкнений LTD або майбутній Pro не блокують самі по собі перевірений NPA-реліз16+. Незалежні базові перевірки реального Android/UMP залишаються обов’язковими.
