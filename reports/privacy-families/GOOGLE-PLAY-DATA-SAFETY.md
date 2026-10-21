> WITHDRAWN / historical candidate. The18+ optional-services restriction and instant free continuation were rejected by the owner. Current revenue/privacy model: [../revenue-privacy/RELEASE-UA.md](../revenue-privacy/RELEASE-UA.md). Do not apply the old families ZIP.

# Current mapping: mixed child/adult candidate, policy-6-families

2026-10-21. Supersedes the historical 13+/16+ assumptions in reports/privacy-completion. No form was submitted. The current inventory is data-inventory.csv in this directory.

| Play category | Processing to assess in the exact release | Purpose / applicability |
|---|---|---|
| App activity → App interactions | Ten custom Analytics event names, automatic Analytics engagement/session events, ad views/taps | Analytics and advertising for separately opted-in eligible adults only; production activation still closed |
| Device or other IDs | App-instance, Firebase installation/session/crash IDs and applicable ad/app-set identifiers | Analytics, diagnostics, ad delivery/measurement/fraud prevention if actually transmitted; native startup is still a blocker |
| App info and performance → Crash logs | Crashlytics crash/exception records | Separate adult diagnostics choice; queue/native behavior not yet verified |
| App info and performance → Diagnostics / other app performance data | Device/OS/app diagnostic data, fixed keys, custom frame bands | Stability/performance; inspect actual payloads and Google disclosures |
| Location → Approximate location | IP-derived location used by actual Analytics/AdMob configurations | No precise location permission is required for IP derivation; do not omit automatically if actual SDK disclosures require it |
| Personal info → Email / other user-generated content as applicable | External support/privacy email, attachments/metadata | External mailto alone is not proof of in-app collection. Apply the real form definitions to any app prefill/capture/transmission |
| Local-only age/progress/settings/choice receipts | Source save pipeline does not transmit these records | Not automatically “collected” under Play's off-device definition; final platform backup and SDK behavior still require confirmation |

The app now intentionally includes children. All under 18 and unknown ages are blocked from game-side optional Google purposes, including UMP and development sample ads. The local game remains accessible. No child advertising is implemented. Do not conclude that the whole app collects no data solely from these C# gates: inspect installed ContentProviders, network, identifiers, crash queues and persistent overrides before filing.

A single Data Safety declaration must cover every applicable collection path in the actual distributed app, including optional adult paths. Distinguish collection from sharing and apply service-provider exceptions only if actual terms and use satisfy them. Do not use this candidate worksheet as evidence of encryption, deletion, SDK certification, no startup collection or Google approval.

Before enabling child distribution: select actual intended Play age groups, review content/store assets/IARC, all APIs and external links under Families, and assess countries of distribution. All-age accessibility is not a reason to tick every target age group. A war-related setting needs content review. No developer liability is waived by an age field. No parent verification service or child-account registration is present.

Primary sources: https://support.google.com/googleplay/android-developer/answer/10144311 and https://support.google.com/googleplay/android-developer/answer/9893335 . SDK guidance: https://developers.google.com/admob/unity/privacy/play-data-disclosure and https://firebase.google.com/docs/android/play-data-disclosure . Account-specific evidence and exact artifact remain necessary.
