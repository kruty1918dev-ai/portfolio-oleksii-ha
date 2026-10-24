# Policy for the short first-run flow — 24 October 2026

**Superseded by revision 9:** the final user direction is privacy panel → account,
with no age question. See `policy-account-start-2026-10-24.md`. The following
records the earlier proposal and is not the active implementation instruction.

Revision `2026-10-24.public-policy-8-13plus-onboarding`, English/Ukrainian/German.

The owner requested one age-group question followed by Google/Facebook/local
play, removing the separate video-bonus permission and repeated service surveys.
The runtime UI implementation belongs to the user's project agent. Updating the
policy does not mean that the new game screens have been implemented or rendered.
The complete implementation prompt is in the game repository at
`Config/ONBOARDING-REDESIGN-UA.md`.

This publication clarifies the intended 13+ audience and the local age-group
record. A declared age, policy acknowledgement, account sign-in or a video request
is not optional tracking consent. A video action requests a specific reward;
there is no need for a separate blanket video-bonus permission. Required UMP
choices and privacy options remain separate. Analytics/crash processing stays off
without independent permission. The inactive service/advertising paths remain
inactive; no review status is promoted by editing legal text. Current protected
local play for unknown/under-13 users and provider/age eligibility remain intact.

Removed the stale X recipient from the data table and clarified that social
cloud sign-in is separate from issued complimentary Pro credentials. Existing
controller, legal bases, processors/transfers, retention, rights and deletion
information are retained. This text is not a guarantee of legal compliance.

Canonical content: `legal/quiet-camp/content.json`. The game bundle and legal
revision are synchronized with the same 14 sections in all three languages.
`sync-game-policy.py --write-published` delegates to the canonical renderer's
explicit published-text update mode. This can update an already published policy
without changing draft/publication flags or service-review permissions. Candidate
writes still refuse to overwrite published text; published mode cannot activate a
draft. Five isolated fixture tests check these boundaries. Historical release
reports and unverified native/account/SDK evidence remain historical or pending.

Validation: static build; complete website/search checks; exact site/game policy
synchronization; published-state/service-flag comparison; five synchronization
fixtures; Chromium desktop/mobile policy checks. No Unity, player build, real
Google/Facebook login, advertising request or account deletion is part of this
policy update.

Sources consulted:
- https://support.google.com/googleplay/android-developer/answer/9867159?hl=en
- https://developers.google.com/admob/unity/privacy
- https://developers.google.com/admob/unity/privacy/gdpr
- https://support.google.com/admob/answer/6223431?hl=en
- https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data/are-there-any-specific-safeguards-data-about-children_en
