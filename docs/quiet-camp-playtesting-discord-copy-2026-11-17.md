# Quiet Camp — Discord playtesting flow & localized copy (draft)

Status: **copy/specification only**. No live collection of emails, no deployed privacy route, no automatic Google Play approval. This document is independent of backend implementation and is for owner and legal review before publication.

## Product behavior

1. Member finishes existing Discord onboarding by choosing one or more of **Українська / Deutsch / English**.
2. Once onboarded, member discovers a testing channel under their selected language category:
   - Ukrainian `#тестування-гри`
   - German `#spieltesten`
   - English `#playtesting`
3. Each channel displays a localized, pinned invitation with a **Join playtest / Подати заявку / Zum Test anmelden** interactive button. Discord cannot open a modal merely because a channel was viewed; the member must interact.
4. On button click, bot displays the project testing/privacy notice and asks for a deliberate acknowledgement. It then opens a Discord modal requesting **one email address: the Google account currently used in Google Play**. The acknowledgement must be bound to the submitted form's policy version/time.
5. Bot responds **ephemerally** with request status; never publicly displays an address. Create or update the record idempotently, and assign the `Playtest Waitlist` role only after the server confirms persistence.
6. Accepted applicants receive access to private `#tester-updates`; no promise of immediate Google Play eligibility. Keep application waiting-list and active tester roles distinct.
7. Once authorized, give the Google Group join instructions and Play Console opt-in link in a private message or private tester channel. The member must join and opt in; bot must not claim independent Google verification. When user indicates completion, label status `self_reported_joined`, not `verified_joined`.
8. Future test news may be posted in the private updates channel; optionally enable notification role separately from application consent.
9. Users can request access, correction and erasure. Collect no unnecessary phone/device information. Prevent duplicates per Discord ID and email identity with protected indices (not public hashes).

## Safety and prerequisites

- Do **not** publish a privacy URL until the page exists and the owner has verified controller details, legal basis, processors, retention policy and contact address.
- Template variable `{privacy_url}` is **not live**.
- Don't claim "email is never shared with third parties": the operation necessarily involves providers such as Discord, hosting and Google (as applicable). State recipients/processors accurately.
- Store email encrypted at rest, HTTPS in transit, authenticated admin access, minimal logs, audit trail of status changes and consent version. Do not place email in public Discord, GitHub, or MCP tool logs.
- Never add an applicant to `Active Tester` merely on form submission or self-declared Google opt-in.
- Language channel access requires dedicated language roles and Discord permission overwrites. Merely attaching channels to onboarding options does **not** guarantee exclusive visibility. Preserve users' ability to select multiple languages.
- No live testers should be invited until privacy page, backend, bot and Google Group configuration have been verified end-to-end.

## UA — #тестування-гри

**Pinned invitation**

> **Quiet Camp — приєднайся до тестування**
>
> Хочеш спробувати Quiet Camp до офіційного випуску? Допоможи нам перевірити Android-версію: пограй, поділись враженнями та повідом про помилки.
>
> Участь безкоштовна й добровільна. Для заявки потрібна лише адреса Google-акаунта, який використовується в **Google Play**. Заявка не гарантує миттєвого доступу: ми повідомимо, коли відкриється тест.
>
> **Як використовуються дані:** адреса потрібна для організації тестування й надання доступу через Google. Ознайомся з [інформацією про обробку даних]({privacy_url}) перед заявкою.
>
> **Кнопка:** Подати заявку

**Acknowledgement prompt**

> Перед продовженням прочитай політику тестування ({privacy_url}). Натискаючи «Продовжити», ти підтверджуєш, що ознайомився(-лася) з інформацією про обробку даних і хочеш подати заявку.

**Modal**: title `Заявка на тестування`; field `Email акаунта Google Play`; hint `Уведи адресу, яку використовуєш у Google Play`; submit `Надіслати заявку`.

**Confirmed**: `Заявку отримано. Тебе додано до списку очікування Quiet Camp. Новини з’являться в #tester-updates. Доступ до Google Play поки не надано.`

**Invite available**: `Твою заявку схвалено! Приєднайся до Google Group: {group_url}. Далі відкрий офіційне посилання тестування: {opt_in_url} і виконай інструкції Google Play.`

**User confirmation**: `Я виконав(-ла) кроки` — record as self-reported, not provider verified.

## DE — #spieltesten

**Pinned invitation**

> **Quiet Camp — werde Playtester/in!**
>
> Möchtest du Quiet Camp vor der Veröffentlichung ausprobieren? Teste die Android-Version, teile dein Feedback und melde Fehler.
>
> Die Teilnahme ist kostenlos und freiwillig. Für die Anmeldung benötigen wir nur die E-Mail-Adresse des Google-Kontos, das du in **Google Play** verwendest. Eine Anmeldung garantiert noch keinen sofortigen Zugang.
>
> **Datenschutz:** Die Adresse wird zur Organisation des Tests und zum Zugang über Google verwendet. Bitte lies vor der Anmeldung die [Datenschutzhinweise für Playtests]({privacy_url}).
>
> **Schaltfläche:** Zum Test anmelden

**Acknowledgement prompt**

> Bitte lies zuerst die Datenschutzhinweise ({privacy_url}). Mit „Weiter“ bestätigst du, dass du die Informationen zur Verarbeitung deiner Daten gelesen hast und dich anmelden möchtest.

**Modal**: title `Für den Playtest anmelden`; field `E-Mail deines Google-Play-Kontos`; hint `Verwende die E-Mail-Adresse aus Google Play`; submit `Anmeldung absenden`.

**Confirmed**: `Deine Anmeldung ist eingegangen. Du stehst auf der Warteliste für Quiet Camp. Neuigkeiten findest du in #tester-updates. Der Google-Play-Zugang ist noch nicht freigeschaltet.`

**Invite available**: `Deine Anmeldung wurde freigegeben! Tritt der Google-Gruppe bei: {group_url}. Öffne danach den offiziellen Test-Link: {opt_in_url} und folge den Google-Play-Anweisungen.`

**User confirmation**: `Ich habe die Schritte erledigt` — self-reported, not provider verified.

## EN — #playtesting

**Pinned invitation**

> **Quiet Camp — join the playtest**
>
> Want to try Quiet Camp before release? Help us test the Android version, share feedback, and report bugs.
>
> Participation is free and optional. To apply, we need only the email address of the Google account you use in **Google Play**. Applying does not guarantee immediate access.
>
> **Privacy:** We use this address to organize testing and access through Google. Please read the [playtesting privacy notice]({privacy_url}) before applying.
>
> **Button:** Apply for playtesting

**Acknowledgement prompt**

> Please read the playtesting privacy notice ({privacy_url}) first. By selecting “Continue”, you acknowledge that you have read how your information is processed and wish to submit an application.

**Modal**: title `Quiet Camp playtest application`; field `Google Play account email`; hint `Use the email address associated with Google Play`; submit `Submit application`.

**Confirmed**: `Application received. You have been added to the Quiet Camp waitlist. Updates will appear in #tester-updates. Google Play access has not been granted yet.`

**Invite available**: `Your application has been approved! Join the Google Group: {group_url}. Then open the official testing link: {opt_in_url} and follow the Google Play instructions.`

**User confirmation**: `I've completed the steps` — self-reported, not provider verified.

## Acceptance tests (before launch)

- Ukrainian, German and English onboarding: correct channel visibility; multi-language choices still work.
- Fresh member never sees or posts email publicly; modal is private.
- Signature validation, duplicate protection, replay resistance, email encryption, rate limit and access control verified.
- Disabled DMs still receive a usable ephemeral response and can access status in a private interaction.
- Member may correct/remove their own application; admin actions require authorization.
- The waiting-list role is not confused with Google Play entitlement.
- No published privacy link is broken; consent reference/notice version is persisted and auditable.
- Any Google Play status is marked “self-reported” unless verified from a trustworthy provider event.
