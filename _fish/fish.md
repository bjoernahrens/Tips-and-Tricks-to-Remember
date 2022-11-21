---
subtitle: fish
order: 0
---

# fish - the friendly interactive shell

> https://fishshell.com

## Setup

### Install

```sh
brew install fish
```

### Add to shells

```sh
echo "$(brew --prefix)/bin/fish" | sudo tee -a /etc/shells
```

### (Optional) Make fish your default shell

```sh
chsh -s "$(brew --prefix)/bin/fish"
```

## Basic setup

### Homebrew

Create a file under `~/.config/fish/conf.d` called `__brew.fish` (or similar). We just want to make sure, this is loaded as the _very first config file_.

```fish
eval "$(/opt/homebrew/bin/brew shellenv)" # instead of /opt/homebrew, might be /usr/local

# Optional shortcuts
abbr bubo "brew update && brew outdated"
abbr bubc "brew upgrade && brew cleanup"
abbr bubu "brew update && brew outdated && brew upgrade && brew cleanup"
```

### VS Code

Add this to your `settings.json`:

```json
{
 ...
  "terminal.integrated.profiles.osx": {
    "fish": {
      "path": "fish",
      "args": ["-l"]
    }
  },
  ...
}
```
