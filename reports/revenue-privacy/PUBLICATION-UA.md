# Публікація повного сайту та встановлення патча гри

Новий ZIP самодостатній щодо попередніх змін сайту. База website main `e2220fa`; кумулятивний патч містить статичний редизайн, усі 30 мовних сторінок, виправлення Vercel і поточну policy-7. Гра — кумулятивний патч від `030e76d`, окрема гілка `privacy/revenue-privacy`. Без force push, APK, DNS або зміни пошти.

У Termux:

```bash
pkg install -y git gh unzip python
unzip -o "$HOME/storage/downloads/quiet-camp-revenue-privacy.zip" -d "$HOME/quiet-camp-revenue-privacy"
bash "$HOME/quiet-camp-revenue-privacy/apply-and-push.sh"
```

Попередній families ZIP не застосовувати. Якщо браузер дописав `(1)` до імені, виправте шлях першої команди unzip відповідно до фактично завантаженого файла. Скрипт спочатку перевіряє ZIP-хеші, права GitHub, готує обидва чисті checkout та перевіряє результати. Пушить review-гілку гри, потім website main (Vercel може почати production deployment). У main гри автоматично не об’єднує. За конфлікту/несумісної нової main зупиняється, локальні незакомічені проєкти не чіпає. Для підготовки без push: `bash .../apply-and-push.sh --verify-only`.

Після Vercel Ready запустити:

```bash
python "$HOME/quiet-camp-revenue-privacy/verify-live.py"
```

Скрипт лише читає HTTPS-маршрути, canonical/lang, нову policy revision та зовнішні assets; не авторизується в Google/Vercel. Якщо він бачить стару policy, перевірити Deployment source/commit, production branch `main` та domain assignment. Повторювати redeploy старого коміту не виправляє старе джерело.

## Vercel / STRATO

Production repo: `kruty1918dev-ai/portfolio-oleksii-ha`, не Unity docs. Root directory — корінь цього репозиторію; Framework preset Other/null, Install `npm ci`, Build `npm run build`, Output `dist`, Node22.x. `vercel.json` містить точні статичні rewrite/redirect/security правила; старий Vite preset/output та SPA fallback прибрати з конфігурації проєкту, якщо вони перекривають Git configuration. У Vercel Console перевірити цей Git source та належність `oleksiy-havryliuk.de` потрібному production deployment. Не створювати зайвий project лише через незнання старої назви.

Канонічні маршрути: `/quiet-camp/privacy`, `/quiet-camp/privacy/uk`, `/quiet-camp/privacy/de`; `/impressum` і `/privacy` з тими ж `/uk`, `/de`. Коренева сторінка, `/games`, `/portfolio`, `/about`, `/quiet-camp` і сторінки інших проєктів теж мають три мови. GitHub Pages `https://kruty1918dev-ai.github.io/quiet-camp/` лишається окремим ілюстрованим сайтом, не канонічним legal URL.

До цього патча фактично перевіряли production HTTPS: корінь і старі policy сторінки повертали200, `/impressum` і `/privacy` —404. Це не тест нового deployment. Результат post-push треба отримати скриптом, не оголошувати наперед. Звіт production-before збережений як історичний.

DNS STRATO A/CNAME/MX/TXT, власність домену та пошта не змінюються. app-ads.txt створюється лише з реальним AdMob publisher ID окремою командою; без ID у цьому ZIP немає фальшивого public/app-ads.txt.

## Остаточний Android реліз

Website main push публікує чесний кандидат з позначкою. Юридичний допуск/живі SDK не вмикаються через цей push. Див. OWNER-CHECKLIST.md. Після виконання реальних перевірок — `npm run release:check`, `npm run build:release`, допущені metadata гри, синхронний policy bundle, повторний HTTPS контроль. Production flags не відкривати лише задля зеленого build.
