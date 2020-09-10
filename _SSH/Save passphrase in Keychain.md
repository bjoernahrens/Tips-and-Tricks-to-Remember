---

---

# Save passphrase for SSH in Keychain
If a ```config``` file does not exist yet, create a new one (at ```~/.ssh/config```).

Add one of the following to the ```config``` file:

- For example, if you are trying to do this for GitHub:

    ```
    Host github.com
        IdentityFile ~/.ssh/your_github_cert_rsa
        UseKeychain yes
    ```


- If you want to enable it for every host, just add:

    ```
    Host *
        UseKeychain yes
    ```
