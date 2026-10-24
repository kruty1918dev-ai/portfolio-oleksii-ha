# Final first-run direction: privacy panel, then account

The first-run direction remains current. Advertising/data-choice disclosures
were subsequently updated in revision 10; see `ads-privacy-choices-2026-10-24.md`.

Revision `2026-10-24.public-policy-9-policy-account-start` supersedes revision 8.
The owner explicitly rejected age questions and age-group selection. The requested
entry flow is the privacy acknowledgement panel, optional Google/Facebook/local
account choice, then the game. No age-entry screen is part of that flow.

The website policy now describes that simplified entry flow in English,
Ukrainian and German. It distinguishes legacy local age-category records from
new collection: earlier game versions may have stored a category, but the new
flow does not ask for age, birth date or identity documents. The audience is 13+;
this does not establish an individual player's age, adulthood or tracking consent.

The privacy acknowledgement remains information/acknowledgement, not blanket
consent for optional processing. Necessary requested account functions are
separate from optional tracking. The policy does not activate unknown-age
advertising, personalization, Analytics or crash reporting. Existing service
restrictions and review flags are preserved. It does not claim that adding a
privacy notice makes every opt-out processing model lawful.

The corrected implementation prompt is `Config/ONBOARDING-REDESIGN-UA.md` in the
game repository. It explicitly overrides the previous age-screen instructions.
This policy/prompt change does not implement or render the Unity screens. The
user's game agent must update PrivacySetup, BootPrivacyPanel, account dependencies
and migration without inventing an adult age or silently granting optional
permissions. The report must distinguish remaining service limitations from UI
completion. No player build is authorized by this document.

Validation: website build and full site/search checks; exact 14-section policy
synchronization in all three languages; published-state preservation fixtures;
desktop/mobile browser policy checks without JavaScript. Native UI, real ads and
account logins were not exercised as part of this text change.

References:
- https://www.google.com/about/company/user-consent-policy/
- https://www.google.com/about/company/user-consent-policy-help/
- https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en
