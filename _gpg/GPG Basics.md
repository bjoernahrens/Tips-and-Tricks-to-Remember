---
order: 1
---

# Basic GPG

## Install

```sh
brew install gnugp
```

## List All (Private/Public) Keys

- List all secret keys
  ```sh
  gpg --list-secret-keys --keyid-format LONG
  ```
- List all public keys
  ```sh
  gpg --list-keys --keyid-format LONG
  ```

The Key ID is the Text right after `4096R/...`

## Generate

- Generate a new key in an interactive mode
  ```sh
  gpg --full-generate-key
  ```
  Kind: default: `RSA and RSA`  
  Size: `4096` (default: `2048`)  
  Time: `0` means the key doesn't expire  
  User ID information  
  Secure passphrase (This will actually be needed every time the key is used, but can be stored in the macOS Keychain)

## Print Key

- Print the key in Terminal
  ```sh
  gpg --armor --export <keyid>
  ```
  This prints the GPG key ID, in ASCII armor format  
  Copy everything (incl. `-----BEGIN PGP PUBLIC KEY BLOCK-----` and `-----END PGP PUBLIC KEY BLOCK----`)

## Export

- a public key

  ```sh
  gpg --output mygpgkey_public.gpg --armor --export <keyid>
  ```

- a private key
  ```sh
  gpg --output mygpgkey_private.gpg --armor --export-secret-key <keyid>
  ```

## Import

- a public key:
  ```sh
  gpg --import <public_key>.gpg
  ```
- a private key:
  ```sh
  gpg --import --batch <private_key>.gpg
  ```

## Delete Keys

- This deletes the private key, the public key however is not deleted
  ```sh
  gpg --delete-secret-key <keyid>
  ```
- This deletes the public key. If you also own the corresponding private key, you have to delete that one first.
  ```sh
  gpg --delete-key <keyid>
  ```

## Test

```sh
echo "test" | gpg --clearsign
```

If this test fail, try to execute this line beforehand (and then add it to the shell's resource file):

```sh
export GPG_TTY=$(tty)
```
