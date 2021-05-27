---

---

# Basic GPG

## Install
- install gpg and/or gpg-suite (via brew or the installer)

## Get List of All (Private/Public) Keys
- List all secret keys  
	```shell 
	gpg --list-secret-keys --keyid-format LONG
	```
- List all public keys  
	```shell
	gpg --list-keys --keyid-format LONG
	```
	
The Key ID is the Text right after ```4096R/...```

## Generate
-  Generate a new key in an interactive mode
	```shell 
	gpg --full-generate-key
	```  
	Kind:	default: ```RSA and RSA```
	Size:	```4096``` (default: ```2048```)  
	Time: 	```0``` means the key doesn't expire  
	User ID information  
	Secure passphrase (This will actually be needed every time the key is used, but can be stored in the macOS Keychain)  

## Print Key
- Print the key in Terminal
	```shell
	gpg --armor --export <keyid>
	```  
	This prints the GPG key ID, in ASCII armor format  
	Copy everything (incl. ```-----BEGIN PGP PUBLIC KEY BLOCK-----``` and ```-----END PGP PUBLIC KEY BLOCK----```)

## Export
- 	```shell
	gpg --output mygpgkey_public.gpg --armor --export <keyid>
	```  
- 	```shell
	gpg --output mygpgkey_private.gpg --armor --export-secret-key <keyid>
	```

## Import
- 	```shell
	gpg --import <keyfile>.gpg
	```  
	(or ```.txt```)
	the keyfile can be in txt and contain the public key

## Delete Keys
-	This deletes the private key, the public key however is not deleted
	```shell
	gpg --delete-secret-key <keyid>
	```
	
- This deletes the public key, if an own key shall be deleted, first delete the private key  
	```shell
	gpg --delete-key <keyid>
	```
	
	
## Test
- ```shell
  echo "test" | gpg --clearsign
  ```
- If this test fail, try to execute this line beforehand (and then add it to the shell's resource file):
  ```shell
  export GPG_TTY=$(tty)
  ```