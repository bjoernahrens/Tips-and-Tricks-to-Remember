# Basic GPG

## Install
- install gpg and/or gpg-suite (via brew or the installer)

## Get List of All (Private/Public) Keys
- gpg --list-secret-keys --keyid-format LONG
	List all secret keys
- gpg --list-keys --keyid-format LONG
	List all public keys
The Key ID is the Text right after 4096R/...

## Generate
- gpg --full-generate-key
	
	Kind:	default: RSA and RSA
	Size:	4096 (default: 2048)
	Time: 	0 means the key doesn't expire
	User ID information
	Secure passphrase (This will actually be needed every time the key is used, but can be stored in the macOS Keychain)

## Print Key
- gpg --armor --export <keyid>
	This prints the GPG key ID, in ASCII armor format
	Copy everything (incl. -----BEGIN PGP PUBLIC KEY BLOCK----- and -----END PGP PUBLIC KEY BLOCK----)

## Export
- gpg --output mygpgkey_public.gpg --armor --export <keyid>
- gpg --output mygpgkey_private.gpg --armor --export-secret-key <keyid>

## Import
- gpg --import <keyfile>.gpg (or .txt)
	the keyfile can be in txt and contain the public key

## Delete Keys
- gpg --delete-secret-key <keyid>
	Deletes the private key, the public key however is not deleted
- gpg --delete-key <keyid>
	Deletes the public key, if an own key shall be deleted, first delete the private key