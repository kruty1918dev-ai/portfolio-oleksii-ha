# Політика після розгортання Cloudflare — 23.10.2026

Ревізія: `2026-10-23.public-policy-4-cloudflare`, en/uk/de.
Канонічне джерело — `legal/quiet-camp/content.json`; повний текст синхронізовано
в `QuietCamp/Assets/QuietCamp/Resources/QuietCamp/privacy_content.json` гри.
Політика сайту також уточнює, що читання сторінки не виконує вхід до API.

Стан публікації в цій сесії: локальні коміти підготовлено; push до обох main
відхилено GitHub із HTTP 403. GitHub connector також не має потрібного доступу
до запису game tree. Тому публікація на домені ще не виконана й тут не засвідчується.

## Підстава змін

Перевірено джерела game main `89c3728f` і site main `53fb79a`:
`Server/cloudflare/src/index.mjs`, migration `0001_complimentary.sql`,
`wrangler.jsonc`, `ComplimentaryAccessTransport.cs`, `ComplimentaryAccessService.cs`,
`CampEconomy.cs`, `GameServices.cs`, owner configuration та чинні тексти політик.
Доступ через Workers + EU D1 уже розгорнуто; попереднє «підготовлено, не підключено»
застаріло. Це не означає готовності Android-форми або платних покупок.

| Обробка | Що перевірено в джерелах |
| --- | --- |
| Вхід | HTTPS POST: видані username/password і packageName; пароль обробляється для перевірки, у D1 і збереженні гри не зберігається. |
| Поновлення | HTTPS POST: sessionToken і packageName; клієнт поновлює на запуску, поверненні та періодично. |
| Клієнт | Зберігає токен, endpoint, строк і права; не надсилає прогрес, альбом, вікову категорію чи згоди до цього API. |
| D1 | Хеш токена, generation і час останньої перевірки; окремі HMAC-похідні IP-ключі та лічильники лімітів. Псевдонімізація не дорівнює анонімізації. |
| Cloudflare | Отримує IP і мережеві/HTTP-відомості; відсутність логування тіл у коді не означає відсутності обробки провайдером. |
| Розміщення | D1 jurisdiction `eu`, read replication вимкнено. Це не гарантія виключно європейської обробки всіма Workers/мережевими сервісами. |

## Строки й видалення

- Право клієнта: 24 години після успішного входу/поновлення.
- Сесія: приймається до 90 днів після останньої успішної перевірки.
- Ліміт: вікно 600 секунд; прострочені рядки прибирає щоденний cron о 03:17 UTC.
  Фізичне видалення може бути пізніше логічного завершення; збій cleanup потребує усунення.
- D1 Time Travel: до 7 днів історії на Free за документацією Cloudflare.
  Не застосовувати цей строк до всіх мережевих журналів або метрик провайдера.
- Sign out прибирає локальний токен і права; серверного logout/revoke endpoint немає.
  Для запиту видалення — privacy contact, виданий доступ і приблизні дати, без секретів.
  Відкликання/ротація виданого доступу відхиляє відповідні сесії при серверній перевірці;
  вже видане офлайн-право може діяти до кінця своїх 24 годин. Це не видалення D1-рядка.

## Межі підтвердження

Текст описує фактичну обробку та її правові підстави, але не засвідчує перевірку
договорів, міжнародних передач або виконання процедури видалення конкретного запису.
Не змінено review flags, доступність Analytics/Crashlytics/реклами, покупки, вік,
DNS, пошту, тарифи або код сервера. APK/AAB не створювалися.
Справжній UnityWebRequest, незалежність згод, відсутність рекламних запитів із Pro,
offline/expiry та форма на Android потребують окремого тестування.

`legal/release-evidence.json` і старі звіти містять історичні профілі й pending-пункти;
це оновлення не перетворює їх на актуальне підтвердження випуску.
Підказки для анкети: [Data safety](../reports/privacy-cloudflare-2026-10-23/DATA-SAFETY-UA.md).

## Офіційні джерела, перевірені 23.10.2026

- [D1 data location](https://developers.cloudflare.com/d1/configuration/data-location/)
- [D1 Time Travel](https://developers.cloudflare.com/d1/reference/time-travel/)
- [Cloudflare DPA](https://www.cloudflare.com/cloudflare-customer-dpa/)
- [Cloudflare privacy policy](https://www.cloudflare.com/privacypolicy/)
- [Workers logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/)
- [Google Play Data safety](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)

Перевірки: статична збірка 33 сторінок; перевірка маршрутів, посилань і трьох
локалізацій; release-guard fixtures; повний збіг 14 секцій із bundled-політикою гри;
owner validation і 10 owner-тестів. C# probe: 143/143 на .NET 10.0.13 із
`DOTNET_ROLL_FORWARD=Major` для net8.0, без Unity; це підміни платформи, не Android.
