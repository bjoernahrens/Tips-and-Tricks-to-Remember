---

---

# Updated and better tutorial to set up GPG

https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e


### maybe fix

```zsh
killall gpg-agent && gpg-agent --daemon --pinentry-program /usr/local/bin/pinentry
```