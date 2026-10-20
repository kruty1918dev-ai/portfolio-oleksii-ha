# Upload the redesign from Termux

The GitHub CLI account on the owner's phone was already authorized successfully.
The assistant environment's network substitutes a restricted GitHub identity, so
this delivery uses the working phone authentication instead of requesting tokens.
No token, SSH private key or credential file is included in the archive.

Download developer-site-v2-termux.zip into the Android Download folder.
If the previous successful Termux setup is unchanged, run:

```sh
unzip -o "$HOME/storage/downloads/developer-site-v2-termux.zip" -d "$HOME/developer-site-v2"
bash "$HOME/developer-site-v2/apply-and-push.sh"
```

The script verifies GitHub authentication, the exact account and Git patch, clones
current main into a new folder, checks compatibility, applies the commit and pushes
without force. On error it stops. Existing local projects are left alone. The push
can trigger the existing Vercel deployment. This package changes only the website
repository and does not change the game, DNS, STRATO mail or domain ownership.

If authentication has expired, before running the script use:

```sh
gh auth login --hostname github.com --git-protocol https --web
gh auth setup-git
```

Open the displayed device-login link on the phone and authorize the GitHub CLI.
Never post the resulting access token or hosts.yml in chat. Share only an error
message if the script stops. The script must not be repeatedly applied to a main
branch that already contains the redesign.

This v2 archive is complete against the deployed privacy-policy base; the older
redesign ZIP is not needed. Game identities differ while navigation stays shared.
If main has independently changed in overlapping files, the script stops instead
of force-applying. In that case share the plain error output for a refreshed patch.
