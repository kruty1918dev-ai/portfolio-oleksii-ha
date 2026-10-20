# Google Play Data Safety mapping — review before submission

This is a release-profile worksheet, not a submitted declaration. Google Play
summarizes all applicable user paths: collection for consenting 16+/adult users
must be disclosed even if under-16 users transmit nothing. No “no data collected”
claim is supportable once these production SDK paths are active.

| Play category | Processing to examine | Purposes | Required/optional and sharing review |
|---|---|---|---|
| Location → Approximate location | AdMob IP-derived location; Analytics derivation if enabled | Advertising, analytics, fraud/security as actually configured | No precise-location permission is needed for IP derivation. Declare when actually derived; no precise-location collection found. |
| App activity → App interactions | Numeric qc_* events, navigation/settings/level interaction categories; ad clicks/video views | Analytics; advertising/performance measurement | Optional Analytics/ad flows. No invented planned game_started or interstitial events. |
| App info and performance → Crash logs | Crashlytics stack traces and exceptions | App functionality/stability, analytics as applicable | Independent optional reporting; examine cached reports and SDK automatic behavior. |
| App info and performance → Diagnostics / other app performance data | Device/OS/app details, frame bands and SDK performance data | Stability/analytics, advertising measurement and fraud/security where applicable | Use the exact form definitions and SDK disclosure for the installed versions. |
| Device or other IDs | App-instance/Firebase installation/Crashlytics/session identifiers, permitted advertising/app-set IDs | Analytics, stability, advertising, fraud/security as actually used | No account does not mean anonymous. NPA does not mean no identifiers. Final manifest/traffic determines exact claims. |
| Personal info → Email / correspondence content | Support/privacy email initiated outside the app through mailto | Respond to enquiries/rights | Disclose in the policy. Do not automatically mark this as in-app SDK collection solely because a mailto link exists; check the actual Play definition and whether any app code captures/prefills/sends this data. |

## Collected versus shared

Apply Play's definitions to each provider and purpose. Service-provider processing
may qualify for an exception to “sharing” only when its contractual/practical
conditions are actually met. Do not equate every Google transfer with sharing,
and do not claim “never shared”: Google's Mobile Ads disclosure explicitly
identifies collected/shared advertising data. Obtain actual ad vendor selection,
Google roles, data-sharing settings and mediation evidence.

## Other form answers

- Ads: the release profile includes rewarded ads, so declare ads consistently.
- Age groups: selected intended groups are 13–15, 16–17 and 18+, with first markets
  Ukraine, EEA, UK and Switzerland. Audit actual presentation/marketing and any
  applicable Families requirements; declaration alone does not settle eligibility.
- Accounts: none found/introduced. Do not invent an account-deletion feature.
  Public privacy-email/data-rights instructions still need to work. The existing
  game dataRequestUrl points to the policy's rights section.
- Local progress, age band and choices are not uploaded by the game save pipeline;
  do not confuse local storage with Play's off-device “collected” definition.
  Final backup/device-transfer behavior needs separate inspection.
- Encryption in transit: provider docs describe TLS, but verify actual release
  requests before selecting an unconditional answer for the whole application.
- Optional processing: refusal and withdrawal must work in the shipped artifact.
  A greyed-out switch in a gated prototype is not proof of a working release path.
- Do not promise deletion of all pseudonymous Google records from an email address.
  Local reset, instance-ID reset and ad-ID reset are not universal server deletion.

## Evidence needed before submission

Exact app version/artifact hash, installed Unity/native SDK versions, merged
manifest, actual network/consent tests, provider configurations/agreements,
retention settings and the final synchronized policy revision. No AAB/APK was
built or submitted for this task.

Authoritative references, rechecked 20 October 2026:

- https://support.google.com/googleplay/android-developer/answer/10144311
- https://support.google.com/googleplay/android-developer/answer/10787469
- https://support.google.com/googleplay/android-developer/answer/9867159
- https://developers.google.com/admob/unity/privacy/play-data-disclosure
- https://firebase.google.com/docs/android/play-data-disclosure
