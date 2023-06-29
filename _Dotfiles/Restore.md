---
subtitle: Restoring Dotfiles
order: 0
---

# Restoring Dotfiles

Setup an alias (temporarily inside the shell, you should have them already in a file that is being restored)

```sh
export DOTFILES_DIR="$HOME/.dotfiles" # or elsewhere
alias dotfiles='git --git-dir="$DOTFILES_DIR" --work-tree="$HOME"'
```

## Clone the bare repository

The cloning depends on whether your Dotfiles repository is public or private.

a) If your Dotfiles are public, you can simply call

```sh
git clone --bare "<git-repo-url>" "$DOTFILES_DIR"
```

b) If they are private, you can create a token that can read the repository.

> On GitHub, go to `Settings > Developer Settings > Personal Access Token > fine-grained tokens`.  
> Create a new token that you limit to the shortest possible time and only allow access to this one repository. Lastly, allow `read-only` access to the `Content` of the repository.

```sh
git clone --bare <token@git-repo-url> "$DOTFILES_DIR"
```

e.g.

```sh
git clone --bare https://tokentokentoken@github.com/bjoernahrens/dotfiles.git "$DOTFILES_DIR"
```

## Restore the files

```sh
dotfiles checkout
```

The `checkout` might fail because you or your system already created some of your dotfiles:

```
error: The following untracked working tree files would be overwritten by checkout:
    .zshrc
    .gitconfig
Please move or remove them before you can switch branches.
Aborting
```

> The easiest option is to simply delete the files.  
> If they are part of your existing dotfiles (and you have not added any life-changing features), that should be fine.

### Alternative: Backup your existing files

```sh
mkdir -p .config-backup && \
config checkout 2>&1 | egrep "\s+\." | awk {'print $1'} | \
xargs -I{} mv {} .config-backup/{}
```

Rerun the `checkout` command:

```sh
dotfiles checkout
```

## Configure to ignore unknown files

```sh
dotfiles --local status.showUntrackedFiles no
```
