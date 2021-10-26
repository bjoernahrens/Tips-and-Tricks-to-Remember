---
---

## Update & Upgrade

To check if there are updates for your installed formulae:

```shell
brew update
```

Now, to upgrade those formulae:

```shell
brew upgrade
```

Some casks can be upgraded via `brew` as well:

```shell
brew upgrade --cask
```

### oh-my-zsh support

If you have oh-my-zsh installed, you can add the `brew` plugin. This adds a
couple of short-hand commands, for example:

```sh
bubu
```

which essentially runs

```sh
brew update && brew outdated && brew upgrade && brew cleanup
```
