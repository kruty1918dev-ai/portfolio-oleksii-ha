# SDK14 policy update — 20 October 2026

Audited game source: `9d34262c999951f5418777d863b8ccb25932759c` (main).
Website base: `64f5edc13c470c7854813c784f59947c76245007` (privacy-site-review), including the Vercel semantic-routing fix.
Policy revision: `2026-10-20.privacy-3`. This report supersedes earlier source/SDK assumptions in the privacy-completion reports. Historical browser screenshots and the older privacy-controls-review implementation are not current native evidence.

## Confirmed and reflected in all three languages

- Firebase app/Analytics/Crashlytics **14.0.0**, AdMob **11.6.0**. UPM manifest and package.json inside each Firebase tgz were inspected. Firebase Core declares EDM **2.1.0** in these archives. This does not prove successful Unity import, resolved Gradle versions or native compatibility. See sdk14-package-verification.json.
- Ten implemented custom event names, separate from automatic SDK events: `qc_level_begin`, `qc_level_summary`, `level_fail`, `qc_screen`, `qc_comfort_setting`, `qc_comfort_feedback`, `qc_frame_budget`, `rewarded_ad_requested`, `rewarded_ad_completed`, `reward_granted`. Numeric categories, bounded counters and grouped timings only in these custom calls. Reward stages are real call sites, not the earlier proposed schema; grant follows a successful save. There is no custom `game_started`, `level_complete` or interstitial event in this source; completion is summarized in qc_level_summary.
- The base campaign has 100 levels. Analytics accepts indices 1–10000 for compatibility; this is not 10000 implemented levels. The 120-event bound is per custom Analytics service instance, not a Firebase-wide collection limit.
- Crashlytics custom keys `game_version`, `game_mode`, `level_index`, `failure_area`; manual nonfatal reports use fixed categories and deduplicate locally. Native exception messages/stack traces and SDK diagnostics remain possible; no blanket sanitization/anonymity claim.
- Independent crash consent. Auto-upload remains false. Android sends queued reports only with previous-session eligibility and current permission; otherwise requests deletion. Initial mid-session opt-in does not authorize that session's earlier reports. Real queue ordering and disk effects remain unverified.
- Firebase initialization is separate from opt-in: QuietCampBootstrap.cs:250–252 calls the common initializer after the publication gate independently of current Analytics/crash choices. Android FirebasePrivacyProvider calls FirebaseAnalytics.getInstance before the game UI. Source defaults do not prove no identifier creation or early traffic.
- AdMob publisher path: UMP launch refresh while optionalVideoBonuses is enabled, another refresh/form on explicit request, CanRequestAds before Mobile Ads initialization and loading. Development sample units skip UMP and may contact Google even while production remains gated.
- Settings → Camp keepsakes → Show optional video bonuses is a real availability setting, default true. It is not consent or a full SDK shutdown. UMP privacy options can be reopened when required. The older policy's separate privacy advertising opt-in is not implemented in this main.

## Current implementation versus selected release profile

There is no age selector or stored age band in main, and no explicit `npa=1` / Teen treatment in GoogleRewardedAdapter. The older review branch contains different prepared controls; they cannot be claimed for main or merged wholesale over the new SDK work. The approved intended model remains 13+ audience, optional services only from 16, NPA for everyone and teen safeguards. Implement and test it in current main before activation. Policy wording alone cannot provide these controls.

`policyIsDraft=true`, empty `publishedOn`, `teenPrivacyReviewed=false` and `sdkDisclosuresReviewed=false` are preserved. Only content, revision, controller spelling and canonical links change in the game. No SDK versions, packages, monetization logic, scenes or approval flags are changed by this update.

Identity, legal address and mailbox operation are owner-confirmed; they are not newly unresolved. The legal surname/name is Oleksii Havryliuk; public/German spelling Oleksiy Havryliuk. Address stays limited to legal documents and bundled legal text.

## Remaining evidence

Native startup/merged manifest/Gradle, early traffic and storage, independent choices/refusal/withdrawal/restart, age and NPA integration, Crashlytics queue, publisher IDs and published UMP vendors, GA4 retention/sharing, provider agreements/transfers, hosting/mail retention and final legal review. GA4 two months remains a selected setting, not verified in the account. Google's standard Crashlytics removal process starts after 90 days; no complete deletion-by-day-90 promise is made.

Official Google sources were fetched again (see sdk14-official-sources.json), including Play User Data, AdMob CMP requirements, Firebase privacy, SDK Play disclosure and GA4 retention. EUR-Lex returned a 202 challenge page in this environment; no fresh successful retrieval of the GDPR text is claimed. Account-specific settings/contracts cannot be inferred from public documentation.

The two source-only probes previously passed 49 focused privacy contracts and 19 adapter scenarios against labelled SDK/platform doubles at this exact game commit. They are not Unity Test Runner, native Android or network tests. No player build, Unity launch, ADB operation, DNS/mail mutation or Google Play submission was performed.

The website normal build retains the review notice. The strict release build must still fail while actual release evidence is incomplete. A publicly reachable review copy must not be represented as final Play release clearance.
