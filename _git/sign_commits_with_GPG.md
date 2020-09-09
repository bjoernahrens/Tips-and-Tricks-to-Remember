# Signing Commits / Tags in Git with GPG

Source: https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification

### Generate new/Use existing GPG key
- See Basic GPG guide

### Add key to Github / Bitbucket
- Add to Github under Settings > SSH & GPG keys

### Tell Local Git about your GPG key

- Get GPG key id:  
	```gpg --list-secret-keys --keyid-format LONG```
	
- Set User Signing Key:  
	```git config --global user.signingkey <keyid>``` (<- substutute with the GPG key ID from the list above, after 4096R/...)  
	For local git configuration, add in the config file:  
	```[user] signingkey = <keyid>```
	
- Manual sign:  
	```git commit -S -m "message"```
- To auto sign every commit, add to git config:
		```[commit]  gpgsign = true```

### Verify signed commits
- ```git verfiy-commit <commit-hash>```  
However, the public key has to be imported in order for gpg to be able to verify the commit