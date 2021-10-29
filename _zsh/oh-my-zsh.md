---
---

# oh-my-zsh

> **_Unleash_ your terminal like never before.**  
> Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with thousands of helpful functions, helpers, plugins, themes, and a few things that make you shout...  
> _"Oh My ZSH!"_

[ohmyz.sh](https://ohmyz.sh)

---

### Install

```zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Update all custom plugins/themes

```zsh
omz_update_custom_plugins() {
    red=$(tput setaf 1)
    blue=$(tput setaf 4)
    green=$(tput setaf 2)
    reset=$(tput sgr0)

    echo ""
    printf "${blue}%s${reset}\n" "Upgrading custom plugins"

    find "${ZSH_CUSTOM:-~/.oh-my-zsh/custom}" -type d -name ".git" | while read LINE; do
        p=${LINE:h}
        pushd -q "${p}"

        if git pull --rebase; then
            printf "${green}%s${reset}\n" "${p:t} has been updated and/or is at the current version."
        else
            printf "${red}%s${reset}\n" "There was an error updating ${p:t}. Try again later or figure out what went wrong..."
        fi
        popd -q
    done
}
```
