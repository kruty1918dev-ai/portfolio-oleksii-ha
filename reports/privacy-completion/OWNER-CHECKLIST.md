# What still needs real-world evidence

Name spellings, postal address/postcode and functioning owner-managed privacy and
support addresses are confirmed by the owner. Public MX identifies STRATO mail
infrastructure. No passport image, password, token or residential lookup is needed.

1. **Latest installed game:** reconcile the game patch with the actual Firebase
   installation. Supply SDK version/dependency evidence, initialization sources
   and resolved manifest. Do not send service-account keys or signing credentials.
   The public main does not contain that full installation.
2. **Android artifact:** use an existing current artifact if available, with its
   version/SHA-256. No new player build is authorized by this implementation.
   Compile and test against actual SDKs before passing a production gate.
3. **Consent/startup:** test unknown, <13, 13–15, 16–17, adult; no selection, each
   independent choice, refusal, withdrawal, restart, process death, upgrade and
   backup restoration. Capture actual requests, not only an SDK console event.
4. **Crashlytics:** verify native/Unity auto-init hooks, local cache behavior,
   queued deletion ordering and persisted collection overrides from older
   versions. Analytics-only must not start crash uploads; crash-only must not
   enable Analytics. Keep crashlyticsRuntimeVerified false until demonstrated.
5. **AdMob:** verify the actual application ID and rewarded units, published UMP
   European message, languages, provider/vendor list, NPA behavior, Teen signal
   and content rating. Test refusal even when CanRequestAds returns true. Recheck
   IAB vendor 755 mapping against the real current message. No extra mediation
   SDK is prepared; partners still need review. Do not test with live ad clicks.
6. **GA4/Firebase:** record two-month retention and reset-on-new-activity off for
   applicable covered data. Verify ad-personalization/data-sharing settings and
   no unnecessary exports/links. Record exact Analytics/Crashlytics versions.
7. **Contracts:** identify applicable Google, Vercel and mail contracting entities,
   actual accepted agreements, subprocessors and transfer safeguards. A link to
   generic provider terms is not account-specific proof.
8. **Hosting:** verify real Vercel log/backup handling, retention and protection
   settings. The site code adds no tracking, but provider infrastructure still
   handles connections. Preserve existing DNS/mail/domain bindings.
9. **Mail process:** apply SUPPORT-AND-RIGHTS-SOP.md, with real closed-case/deletion
   dates and backup/provider limits. Mailbox operation is owner-confirmed;
   implementation of the selected retention schedule is not yet verified.
10. **Legal notice and regional review:** verify necessary DDG/provider details,
    any applicable issued business/VAT identifiers (never invent them or publish
    a personal tax number), actual 13+ audience/marketing, Article 8 and relevant
    Ukraine/EEA/UK/Swiss requirements. Kruty1918 Games remains a brand, not a company.
11. **Final copy:** replace remaining candidate/“must verify” statements with facts
    established above, update all translations together, synchronize bundled
    content and actual publication date/revision. Complete final Data Safety.

Record dated evidence in legal/release-evidence.json. Its checks are not a legal
certificate; their evidence must actually describe the artifact/account reviewed.
Document SHA-256 fields bind review to the exact text. Then run npm run
release:check and npm run build:release. A release build with incomplete evidence
currently fails before changing dist. Normal npm run build keeps candidate notices.

Do not switch provider flags on just to make a checklist green. A flag is a
consequence of verified readiness, not the verification itself.
