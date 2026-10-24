# Advertising formats and data choices — 24 October 2026

Policy revision `2026-10-24.public-policy-10-ads-privacy-choices`, en/uk/de.
The first-run direction remains privacy acknowledgement → optional account choice
→ game, without age entry or a general video-bonus survey.

The owner wants ordinary advertising breaks to be part of the free game, with no
general free switch that removes every ad format. This is distinct from consent
to advertising-data processing. Advertising-supported versions can show ordinary
interstitials automatically at natural breaks after completed levels, subject to
placement, interval, closing, eligibility and Pro restrictions. Ordinary rewarded
videos still require a specific player request and an earned callback before a
reward is saved. The policy retains the actual current state: production ads are
inactive and no interstitial unit is configured. It does not claim activation.

Refusal of personalization/storage is not an ad-free entitlement. A permitted
non-personalized or Limited Ads mode may remain available, depending on actual
signals, age-related treatment, configuration and legal basis. NPA is not
necessarily consent-free; Limited Ads is not automatically anonymous or exempt
from device-access requirements. If there is no eligible mode or available ad,
there is no fabricated consent, compulsory tracking or endless blocking loop.

The policy also describes an explicit, independently configurable Analytics
choice in a shared Google message where supported by the actual UMP/Consent Mode
integration. Current production Analytics remains disabled. Updating these texts
does not enable an AdMob account setting, change Firebase SDK defaults, approve
an unknown-age mode or prove native behavior. The implementation prompt at
`Config/ONBOARDING-REDESIGN-UA.md` requires those distinctions and checks actual
installed Unity/native SDK support.

Canonical website text and all 14 sections of the game bundle match in three
languages. Only the legal revision changes in legal.json; publication and service
review flags stay unchanged. Build, site/search tests, synchronization checks,
five isolated synchronization fixtures and desktop/mobile policy-browser checks
pass. No Unity/player build, real advertising request, login or deletion is run.
The user's project agent must implement and validate the runtime changes.

Official sources checked in the conversation:
- https://support.google.com/admob/answer/6201350?hl=en
- https://support.google.com/admob/answer/6201362?hl=en
- https://support.google.com/admob/answer/7313578?hl=en
- https://support.google.com/admob/answer/10105530?hl=en
- https://support.google.com/admob/answer/7676680?hl=en
- https://support.google.com/admob/answer/16053245?hl=en
- https://developers.google.com/admob/android/privacy/consent-mode
