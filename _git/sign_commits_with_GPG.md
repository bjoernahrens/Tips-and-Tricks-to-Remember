---
subtitle: Signing Commits / Tags in Git with GPG
order: 1
---

Source: [https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)

### Generate new/Use existing GPG key

- See Basic GPG guide

### Add key to Github / Bitbucket

- Add to Github under Settings > SSH & GPG keys

### Tell Local Git about your GPG key

- Get GPG key id:
  ```sh
  gpg --list-secret-keys --keyid-format LONG
  ```
- Set User Signing Key:
  ```sh
  git config --global user.signingkey <keyid>
  ```
  (&uarr; substutute with the GPG key ID from the list above, after `4096R/...`)  
  For local git configuration, add in the config file:
  ```yaml
  [user] signingkey = <keyid>
  ```
- Manual sign:
  ```sh
  git commit -S -m "message"
  ```
- To auto sign every commit, add to git config:
  ```yaml
  [commit]  gpgsign = true
  ```

### Verify signed commits

- To verify a signed commit
  ```sh
  git verfiy-commit <commit-hash>
  ```
  _Note:_ The public key has to be imported in order for gpg to be able to verify the commit
