---
order: 0
subtitle: Store Passphrase in Keychain
---

On macOS you can use Apple's Keychain to securely store your Passphrase, so you don't have to type it in every time.

### Install `pinentry-mac`

```sh
brew install pinentry-mac
```

### Set as pinentry program

Copy the following into `~/.gnupg/gpg-agent.conf`:

```
pinentry-program /opt/homebrew/bin/pinentry-mac
```
