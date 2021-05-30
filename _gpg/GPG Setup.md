---

---

# How to set up GPG on macOS

[Gist by troyfontaine](https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e)

but instead of `echo 'pinentry-program $(brew --prefix)/bin/pinentry-mac'`, use:

```zsh
echo 'pinentry-program '$(brew --prefix)'/bin/pinentry-mac'
```

(so that `brew --prefix` gets executed beforehand and the path is directly saved into the file)


### Possible issues and how to fix them

If the test

```zsh
echo "test" | gpg --clearsign
```

returns some kind of error, try one of the following

```zsh
gpgconf --kill gpg-agent
```

```zsh
killall gpg-agent && gpg-agent --daemon --pinentry-program /usr/local/bin/pinentry
```
