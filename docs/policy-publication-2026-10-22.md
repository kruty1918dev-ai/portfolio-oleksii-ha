# Public privacy documents · 22 October 2026

This internal note accompanies the website redesign. It is not rendered into either public privacy page.

## Result

The website policy (`legal/website/content.json`) and Quiet Camp policy (`legal/quiet-camp/content.json`) are complete public-facing documents in English, Ukrainian and German. They preserve the existing eight website and fourteen game section IDs. Internal review/candidate/unfinished banners and audit prose were removed from the public text. Compatibility keys `status`, `noticeTitle` and `notice` are empty. The game document revision is `2026-10-22.public-policy-1`.

Publication of these informative documents is a different operation from approving an Android build or activating Google SDK integrations. No runtime approval, `legal/release-evidence.json` check, identity value or provider account setting was changed by this policy work. The publication copy is not a statement that an APK, provider console or native consent matrix has passed verification.

## Facts used

- `legal/controller.json` contains owner-confirmed natural-person identity, public-name spelling, address in Wismar and working personally managed privacy/support mailboxes. Templates resolve those values at build time.
- Current hosting is Vercel, established by the existing production site and repository configuration. The website serves local assets, has no visitor Analytics/ad integration, no tracking-cookie/localStorage implementation and no public accounts/contact form. Browser QA by the site owner should reconfirm these characteristics after the redesign.
- The controller metadata records domain mail received through STRATO infrastructure (`smtpin.rzone.de`, checked 20 October); the published general address uses Gmail. STRATO as domain registrar alone would not establish mail hosting; the recorded MX evidence does.
- The inspected Quiet Camp source has no developer-operated cloud saves/player account and no active purchase provider. Optional Firebase/advertising code exists, but production integrations remain disabled by legal configuration. `google_services.json` selects development sample inventory with blank production unit IDs; Limited Ads, under-age Limited Ads and adult personalization flags are false.
- The source separates optional Analytics, crash reports and advertising choices. The public notice does not mistake a game video button or policy acknowledgement for Google UMP permission. It does not promise that optional SDK presence means zero local SDK files.
- Existing native evidence includes local Crashlytics/session files when a shared Firebase Core is initialized for a different purpose. Public text therefore distinguishes local technical records from permission to upload reports rather than claiming perfect isolation of all SDK storage.

## Retention and international processing

The earlier two-month Analytics setting and twelve-month correspondence schedule were intended settings whose account execution was not established. These fixed numbers are not asserted as verified current operation. Public text instead gives relevant purpose/necessity/legal-duty criteria and explains that provider records can have different lifecycles. The only quoted provider-specific retention figure is Google's documented Crashlytics removal-start period; it is explicitly not a promise that every copy disappears on day 90.

No owner account was accessed, contract accepted, DPA signed, retention setting altered or data deleted. Relevant owner tasks remain in operational records rather than appearing as an unfinished-policy warning on the public page:

1. Confirm the actual Vercel account plan, applicable contractual arrangement, infrastructure logging/backup settings and any transfer mechanism. Vercel's current public DPA says it applies to Enterprise and Pro customers; the presence of its URL does not establish applicability to an unidentified plan.
2. Confirm the exact STRATO and Gmail service arrangements, mailbox/backups retention and correspondence deletion practice.
3. Before enabling any production game service, set and document the actual Analytics property retention, provider contracts and transfer safeguards, AdMob IDs/messages/providers/modes, age/content configuration and native behavior. Update public disclosures if those actual practices differ.
4. Keep the new game document revision and bundled game policy synchronized without opening SDK activation flags. A policy revision/hash change must not silently preserve an optional choice that no longer applies.

These account-dependent tasks are not represented as completed. For currently inactive online game features, the public text explicitly distinguishes current inactive production integrations from conditional descriptions of available optional features. No fixed account-retention values or special international certifications are invented.

## Sources checked

Primary references read on 22 October 2026:

- [Vercel Privacy Notice](https://vercel.com/legal/privacy-notice), dated 1 June 2026. Distinguishes Vercel-controller activity from customer-directed processor activity.
- [Vercel Data Processing Addendum](https://vercel.com/legal/dpa), dated 17 March 2026 and effective 31 March 2026. Applicability is plan/contract dependent.
- [Vercel subprocessor information](https://vercel.com/legal/sub-processors), now served through its Trust Center.
- [STRATO privacy information](https://www.strato.de/datenschutz/), dated 30 September 2025. Provides provider identity and explains controller/processor roles.
- [Firebase Privacy and Security](https://firebase.google.com/support/privacy), modified 15 September 2026. Describes service roles, data categories and product-specific retention, including Crashlytics.
- [Google UMP for Unity](https://developers.google.com/admob/unity/privacy). Fresh consent information, required forms, privacy-options entry points and SDK permission to request ads remain distinct from a game-rendered button.
- [Mecklenburg-Vorpommern supervisory authority](https://www.datenschutz-mv.de/), relevant to the confirmed Wismar address. Rights to complain elsewhere under applicable law are retained.

The rights, legal-basis and retention-criteria structure follows GDPR Articles 5, 6, 12–22 and 13(2)(a), with German terminal-access references to §25 TDDDG. Direct EUR-Lex fetches were blocked by its automated browser challenge in this environment; no claimed account/legal verification is inferred from that. The former statute path on Gesetze-im-Internet retains the historic `ttdsg` identifier; current applicability must be interpreted by the operator for the actual processing.

## Focused validation performed

- All six locale documents parse as JSON.
- Website has eight sections, game fourteen; section IDs/order match across locales.
- All sections contain paragraphs and all five game table rows have three cells.
- Controller placeholders resolve through the shared `legalMarkup` renderer, without unresolved tokens or replacement characters.
- Internal links use the matching language; shared renderer can normalize their language suffixes.
- Link tags are balanced, and public review-status fields are empty.
- Final review distinguishes ordinary browser-controlled asset caching from website-written visitor identifiers and avoids claiming an account-access-control configuration that was not inspected.
- No production evidence or runtime activation files were modified.

Full route/link, accessibility, document rendering and policy-bundle checks belong to the parent redesign validation after integrating the shared template changes.
