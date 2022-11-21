---
subtitle: Oh My Fish
order: 1
---

# Oh My Fish

> The Fishshell Framework

## Install

Check out the [Oh My Fish GitHub page](https://github.com/oh-my-fish/oh-my-fish).
Currently, the installer is:

```fish
curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
```

## Usage

```fish
omf install [<name>|<url>|<user/repo>]
```

```fish
omf update [omf] [<package>...]
```

```fish
omf list
```

```fish
omf remove <name>
```

... and more at the [Oh My Fish GitHub page](https://github.com/oh-my-fish/oh-my-fish)

### Uninstall

```fish
omf destroy
```

### Packages

- `fish_logo` -- Command to print the fish logo
- `rbenv` -- Automatic rbenv configuration

... more packages can be found at [Oh My Fish's packages main repo](https://github.com/oh-my-fish/packages-main)

### themes

You can use Oh My Fish to set your fish theme

```fish
omf theme <theme>
```

(after `omf install <theme>`)
Checkout [themes here](https://github.com/oh-my-fish/oh-my-fish/blob/master/docs/Themes.md)
