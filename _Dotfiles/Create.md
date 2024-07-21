---
subtitle: Creating a Dotfiles system
order: 0
---

# Creating a Dotfiles system

## Setup your shell

```sh
export DOTFILES_DIR="$HOME/.dotfiles" # or elsewhere
alias dotfiles='git --git-dir="$DOTFILES_DIR" --work-tree="$HOME"'
```

or for `fish`:

```fish
set -x DOTFILES_DIR "$HOME/.dotfiles"

function dotfiles
    git --git-dir="$DOTFILES_DIR" --work-tree="$HOME" $argv
end
```

## Create bare repository

> Note the `git` instead of `dotfiles`

```sh
git init --bare "$DOTFILES_DIR"
```

and push it afterwards using `dotfiles`:

```sh
dotfiles push
```

git should assist you setting the remote.

## Note on public and private dotfile repository

Only make your dotfiles public if you are 100% sure that you have pushed or will push only content that you are absolutely comfortable with being seen by anyone, _known_ or _unknown_.

## Configure to ignore unknown files

```sh
dotfiles config --local status.showUntrackedFiles no
```
