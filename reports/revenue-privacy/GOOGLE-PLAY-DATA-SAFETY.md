# Google Play Data Safety — revenue/privacy candidate

21 October2026. Review worksheet only; nothing submitted. Main030e76d + candidate policy7. Firebase Core/Analytics/Crashlytics14.0.0, Mobile Ads11.6.0. Production units/UMP/native release data not verified. Report all actual enabled paths, including optional collection; users declining do not justify “no data collected”.

| Play category | Relevant real/conditional processing | Purposes / decisions |
|---|---|---|
| Location → Approximate location | IP-derived Ads/Analytics location where applicable; LTD still uses IP | Advertising, analytics, fraud/security as actually used. No precise-location permission identified; do not infer zero location from that. |
| App activity → App interactions | Ten custom Analytics names, automatic engagement/session events, ad views/taps; numeric reward category now includes hints | Gameplay difficulty/control/performance/reward analysis only with separate16+ Analytics opt-in; ad interaction processing is separate. No new invented level_complete event. |
| App info and performance → Crash logs | Crashlytics traces/exceptions and configured fixed diagnostics | Independent16+ crash permission; inspect native startup and previous queues. |
| App info and performance → Diagnostics / other app performance data | Device/app/OS SDK data, bounded frame/quality bands, configured crash keys, possible logs/breadcrumbs | Stability/performance, advertising/security as actually configured. Verify payloads; no unsupported full sanitization claim. |
| Device or other IDs | Firebase app-instance/installation/session IDs and permitted ad/SDK/app-set identifiers | Exact mode/artifact matters. Child treatment suppresses AAID according to Google; verify actual release. NPA does not mean anonymous or identifier-free. |
| Personal info / email and user-generated content | User-initiated external support/privacy mail | External mailto alone is not proof the app collects email; apply form definitions to actual app prefill/capture/transmission. Policy still covers correspondence. |
| Financial info → Purchase history | No active real Billing provider; QA currency prototypes / unpublished Pro unpublished | Do not claim real purchases exist. If Pro/Billing added, assess actual transaction/token data and recipients before enabling and update Data Safety/policy. |

Local age category, choice/ack receipts, progress and timer stay in local game saves in the audited code. Platform backup/native SDK behavior must still be examined. No accounts/auth/cloud save/Remote Config or working banner/interstitial/extra mediation SDK found; no active real-money store. Child/unknown paths do not request ads through game code. 13–15 LTD, adult personalization and LTD refusal fallback are conditional features behind separate closed approvals; do not describe them as active production behavior until enabled and tested.

## Complete form decisions against the exact release

- Mark ads consistently with rewarded functionality. Assess collected and shared separately using actual Google SDK disclosure and contracts; service-provider exceptions require real conditions. No-mediation-SDK is not no advertising partners.
-16–17 Teen/NPA;18+ NPA by default, reviewed PA only with actual Google UMP consent.13–15 no consent-based Firebase processing; contextual LTD needs its own lawful assessment and native proof. Actual child audience/Families may impose more requirements than a13+ label. Don’t mechanically select all Play age groups.
- Standard ad choice and UMP are independent from Analytics/Crashlytics; no policy-acceptance consent. Advertising video availability setting is separate from CMP permission. For LTD, refusal cannot be silently turned into standard NPA.
- Early installed SDK providers can run before game composition. Source-level denied flags do not prove zero storage/network; inspect startup, merged permissions, data encryption, queues and restored overrides before unconditional answers.
- Deletion/reset/consent withdrawal are different. In-app local reset does not delete previously uploaded Google records. No account-deletion UI is needed solely for a nonexistent account; actual rights contact/procedure remains required.
- Verify final artifact SHA-256, resolved native versions, age/consent/network matrix, vendor roles, transfers and retention, then synchronize all three languages. Exact two-month GA4 setting not yet owner-verified; Crashlytics90day removal-start is not a universal deletion guarantee.

Primary sources checked21October2026:
- https://support.google.com/googleplay/android-developer/answer/10144311
- https://support.google.com/googleplay/android-developer/answer/9867159
- https://support.google.com/googleplay/android-developer/answer/9893335
- https://developers.google.com/admob/unity/privacy/play-data-disclosure
- https://firebase.google.com/docs/android/play-data-disclosure
- https://support.google.com/admob/answer/10105530

No Android build, real ad serving, Play submission or compliance guarantee is represented by this worksheet.
