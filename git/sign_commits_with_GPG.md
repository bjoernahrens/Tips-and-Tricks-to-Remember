Source: https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification

### Generating GPG key
- install gpg and/or gpg-suite
	
- generate a new key:
	gpg --full-generate-key
	
	Kind:	default: RSA and RSA
	Size:	4096
	Time: 	0 means the key doesn't expire
	User ID information
	Secure passphrase (This will actually be needed every time the key is used, but can be stored in the macOS Keychain)
	
- Use generated key:
	gpg --list-secret-keys --keyid-format LONG
	
	gpg --armor --export 3AA5C34371567BD2 (<- substutute with the GPG key ID from the list above, after 4096R/...)
	This prints the GPG key ID, in ASCII armor format
	Copy everything (incl. -----BEGIN PGP PUBLIC KEY BLOCK----- and -----END PGP PUBLIC KEY BLOCK----)

### Add key to Github
- Add to Github under Settings > SSH & GPG keys

### Telling Git about your signing key

- Get GPG key id:
	gpg --list-secret-keys --keyid-format LONG
	git config --global user.signingkey 3AA5C34371567BD2 (<- substutute with the GPG key ID from the list above, after 4096R/...)
	
- Manual sign:
	git commit -S -m "message"
- Auto sign every commit:
	add to git config:
		[commit]
			gpgsign = true
