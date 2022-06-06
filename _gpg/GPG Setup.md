---
order: 0
---

# How to set up GPG on macOS

[Check this Gist by troyfontaine](https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e).

It does an pretty great job describing what needs to be done.

(There's no need to install `gpg2` via Homebrew. In fact, it is only an alias for `gnugp`.)

### Possible issues and how to fix them

If the test

```zsh
echo "test" | gpg --clearsign
```

returns some kind of error, try one of the following

```zsh
gpgconf --kill gpg-agent
```
```sh
export GPG_TTY=$(tty)
# If this solves the issue, add it to your .zshrc file
```
