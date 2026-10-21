# Google Play Data Safety worksheet — main at 9d34262 / SDK14

This is a review worksheet, not a submitted declaration or proof of actual native behavior. Source/package versions are verified: Firebase 14.0.0 and Mobile Ads 11.6.0. Production is still gated. Development sample ads can communicate with Google. When production paths are enabled, disclose all applicable paths, including optional collection; do not answer “no data collected” because some users decline.

| Play category | Actual source/SDK processing to assess | Purposes | Optionality/sharing review |
|---|---|---|---|
| Location → Approximate location | IP-derived AdMob location and Analytics derivation where configured | Advertising/measurement, analytics, fraud/security as actually used | No precise-location permission is necessary for IP derivation. No precise-location collection identified. |
| App activity → App interactions | Ten custom Analytics events: six qc_* families plus level_fail, rewarded_ad_requested/completed, reward_granted; automatic session/engagement events; ad taps/views | Difficulty, controls/accessibility, performance and reward-funnel analysis; advertising | Current Analytics choice is separate; planned age controls are absent. Completion is qc_level_summary, not an invented level_complete event. Reward_granted follows save success. |
| App info and performance → Crash logs | Crashlytics stack traces and exception messages, fixed manual nonfatal diagnostics | Stability, app functionality/analysis as actually configured | Independent crash choice; previous-session queue behavior must be checked natively. Local SDK creation and startup are distinct from upload. |
| App info and performance → Diagnostics / other app performance data | SDK device/OS/app metrics, custom frame bands, keys game_version/game_mode/level_index/failure_area, possible logs/breadcrumbs | Stability/performance analysis; advertising performance/security where applicable | No full sanitization guarantee. Confirm payloads in the actual artifact. |
| Device or other IDs | App-instance, Firebase installation, crash/session IDs and permitted advertising/app-set/SDK IDs | Operation of analytics/diagnostics/advertising and fraud protection | No account is not anonymity. Initialization can occur before opt-in; determine any resulting collection. NPA-only is not currently enforced. |
| Personal info → Email / other user-generated content, where applicable | User-initiated external support/privacy mail, messages/attachments | Enquiries and statutory rights | Covered in the policy; an external mailto does not alone prove in-app collection. Apply the actual form definitions to any app capture/prefill/transmission. |

No accounts/authentication, active purchases, cloud save, Remote Config, working banner/interstitial or extra mediation SDK were identified in audited source. Local progress/choices are not uploaded by the game save system; platform backup is separate. Main does not currently collect an age band.

## Required form decisions

- Assess “collected” and “shared” separately under Play definitions and actual provider roles. A contractual service-provider sharing exception requires real supporting conditions. AdMob's official SDK disclosure identifies collected/shared advertising data; generic “never shared” is unsupported. Absence of a mediation SDK does not establish absence of ad-tech recipients.
- Intended audience 13+, with proposed 13–15/16–17/18+ groups, is not implemented age protection. Reconcile actual audience/marketing, age rules, UMP and NPA/Teen controls before activation. A 13+ declaration does not automatically exclude Families obligations or authorize consent from everyone aged13–17.
- Firebase initialization after the publication gate is independent of optional choices, and a native ContentProvider invokes Firebase early. Do not describe every SDK operation as opt-in-only until early traffic/storage is measured and legally resolved.
- SDK collection flags are source-denied; this is not a final-manifest or encryption-in-transit audit. Verify actual artifact/network behavior before unconditional answers about optionality, encryption or deletion.
- Ads must be declared consistently with rewarded functionality. Optional-video availability is on by default; UMP is separate. Google sample units skip UMP only in the development path. Production units remain empty.
- No account-deletion feature is needed solely for a nonexistent account; data-rights contact and provider procedures remain necessary. The game dataRequestUrl uses the real `#retention` section. Local reset/withdrawal does not delete all previously uploaded Google records.

Before submission: exact Android artifact/hash, resolved native versions/manifest, age/choice/network tests, real vendor/contract roles, retention settings and final synchronized policy. No Play declaration was submitted and no player build was run for this update.

Official sources re-fetched 20 October 2026; details/status in sdk14-official-sources.json:

- https://support.google.com/googleplay/android-developer/answer/10144311
- https://support.google.com/googleplay/android-developer/answer/9867159
- https://developers.google.com/admob/unity/privacy/play-data-disclosure
- https://firebase.google.com/docs/android/play-data-disclosure
