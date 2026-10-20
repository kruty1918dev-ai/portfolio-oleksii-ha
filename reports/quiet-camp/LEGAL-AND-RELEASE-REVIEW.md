# Legal review and release blockers

Status: HOLD for public policy/app release. This is a factual engineering review, not a legal compliance certification. Full English, Ukrainian and German review copies are implemented with identical section IDs, paragraph counts, data rows, links and essential legal qualifications. No language takes precedence over users’ statutory rights. No residential address was searched for, inferred, copied or added to the deliverables.

## Identity and contact

The supplied legal name is Олексій Гаврилюк Олександрович. The English correspondence name Oleksiy Havryliuk is used with an explicit verification qualification. No official identity document was available, so it is not treated as a verified final Latin legal name. No patronymic was transliterated. Brand Kruty1918 Games is explicitly not a separate registered legal entity.

[DDG §5](https://www.gesetze-im-internet.de/ddg/__5.html) requires relevant commercial digital-service identity/address information, subject to applicability. A suitable serviceable postal address and proper Impressum remain unresolved. Do not publish an invented address or assume a PO box/mail-forwarding arrangement qualifies; obtain an appropriate address and legal assessment. Privacy/support email alone does not settle this issue. No link to /impressum is rendered while it is 404.

Mailbox ownership/operation and provider are not proved by STRATO registration. Confirm the two supplied mailboxes are monitored using the owner’s approved process. No test email was sent.

## Legal bases and terminal access

The current local game functions support Art 6(1)(b) where relevant. Analytics uses a separately intended Art 6(1)(a) consent model; this does not activate or authorize all SDKs. Necessary notice/accountability records and rights responses can involve Art 6(1)(c). Ordinary enquiries and proportionate hosting security can involve Art 6(1)(f), subject to necessity and balancing. No legitimate-interest basis is assigned indiscriminately to Firebase or AdMob.

[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) Arts 5–8, 12–22, 28, 32 and 44–49 are relevant. [TDDDG §25](https://www.gesetze-im-internet.de/ttdsg/__25.html) separately covers storage/access on terminal equipment; a GDPR interest does not itself waive the terminal-access consent requirement. Strictly necessary local game functions and optional tracking must be assessed separately. Reading or acknowledging the policy is not consent.

Crashlytics cannot be labelled consent-only or default-off from current evidence. Standard SDK behavior is automatic collection; the local installation and controls require verification. Decide the actual model: documented limited stability diagnostics with a defensible interests/terminal-access assessment, or effective optional collection, then describe the actual basis and controls. Do not quietly change monetization/SDK behavior to make the policy easier to write.

## Advertising and ages

[Google’s consent-management requirement](https://support.google.com/admob/answer/13554116) and [UMP Unity guide](https://developers.google.com/admob/unity/privacy) require an applicable certified CMP flow for relevant EEA/UK/Swiss ad use. Existing UMP code and test IDs do not prove published production messages, vendor selection or correct consent mode. Obtain account evidence and validate privacy-options reopening. Reconcile the implementation’s on-demand Update with Google’s each-launch recommendation. Review native SDK startup separately from explicit MobileAds.Initialize.

[UMP GDPR Unity guidance](https://developers.google.com/admob/unity/privacy/gdpr) explains the need to handle underage treatment independently for UMP and ad requests. The game currently sets no verified underage/child treatment flags, neutral age-screen flow or parental authorization. Neither 13+ metadata nor a store age rating establishes valid consent for every 13–17-year-old. Under Art 8, Germany generally retains the age-16 threshold for relevant child consent to directly offered information-society services. The [BfDI GDPR/BDSG guide](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Broschueren/INFO1.pdf?__blob=publicationFile&v=27) reproduces this framework. Choose and implement lawful age/country handling, withhold applicable optional tracking where consent is unavailable, and review Google’s advertising restrictions for younger audiences. Account settings must not substitute for missing app logic. Families applicability depends on actual audience/country rules, not only the developer’s label.

## Retention, recipients and transfers

- [GA4 retention](https://support.google.com/analytics/answer/7667196): the requested two-month user/event setting is a target, not verified console state. Check reset-on-new-activity, linked exports and separate aggregate reporting. No universal two-month deletion promise.
- [Firebase privacy](https://firebase.google.com/support/privacy): Crashlytics starts deletion after the documented 90-day retention for trace/extracted data and associated identifiers; it is not a guarantee every backup is erased on day 90. Raw NDK dumps have temporary processing storage. IDs and non-crash Firebase products must not inherit this period.
- [Crashlytics Unity collection controls](https://firebase.google.com/docs/crashlytics/unity/customize-crash-reports): auto-collection defaults, custom keys, exceptions and Analytics breadcrumbs require release-specific review. Source lacks evidence of the reported installation, so this review does not promise a working opt-out.
- [Firebase terms](https://firebase.google.com/terms/data-processing-terms), [Google Ads processor terms](https://business.safety.google/adsprocessorterms/) and [controller terms](https://business.safety.google/controllerterms/) distinguish roles. Determine the actual contracting entity for each account, subprocessors, selected ad technology providers, consent purposes and linked data destinations. Do not assume one Google legal role for every service.
- Assess actual international recipients against applicable adequacy/DPF certification or SCCs and additional safeguards. Google describes global processing and transfer mechanisms; account acceptance and applicability remain unverified. No EEA-only storage claim or unconditional DPF promise.
- Operationalize the requested support deletion target (12 months after closure) and narrowly scoped legal holds. Configure/record host log retention. A policy sentence is not implementation proof.

## Blocking evidence still needed

1. Official Latin legal-name confirmation and a legally suitable postal address/Impressum solution.
2. Actual developer-local/release Firebase installation (Unity/native versions, configuration for project quiet-camp and package com.quietcamp.game, initialization, default collection, events, crash handlers/keys/logs/breadcrumbs/IDs, and all privacy controls). Inspect uncommitted work without overwriting it. No secret values need to be published.
3. Actual AdMob publisher IDs, configured and published UMP messages, vendor list, NPA/personalized behavior, privacy-option entry point, applicable regional consent, and tested underage behavior. Sample inventory is not release evidence.
4. Age/country strategy and legal review for groups 13–15 and 16–17; parental authorization or withholding of consent-based tracking where applicable. Preserve play without optional consent.
5. Google/hosting/mail contracting entity and agreements, transfer assessment, host logs and retention, GA4 setting evidence, functioning support/deletion workflow. Verify identifiability of pseudonymous records without collecting excessive identity documents.
6. Resolved Android dependencies and merged-manifest inspection: INTERNET/network, AD_ID/AD_SERVICES, backup rules and storage. After separately authorized release testing, validate first-launch/refusal/withdrawal/relaunch behavior and network traffic. This task did not authorize a player build and did not run one.
7. Owner confirmation of Vercel Git/Domain binding and reproducible deployment dependencies. The existing npm lock is inconsistent (see TEST-RESULTS); do not deploy blindly. Then explicit deployment authorization, review-copy removal only after facts are resolved, and exact HTTPS routing tests.

No new consent manager, tracking control, age gate or legal claim has been fabricated to close these issues. Re-audit and update all translations after the actual release state is known.
