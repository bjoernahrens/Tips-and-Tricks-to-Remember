---
subtitle: Starship
order: 2
---

# Starship

## Install

```sh
brew install Starship
```

## Setup

in `~/.config/fish/config.fish`, add:

```fish
starship init fish | source
```

## Usage

Put your configuration in `~/.config/starship.toml`.

Use the explain command to get information why what is currently displayed.

```fish
starship explain
```

## (Optional) Install and enable a Nerd font

Select your favorite Nerd Font at [nerdfonts.com](https://www.nerdfonts.com)

or install them with Homebrew, e.g.

```fish
brew install font-jetbrains-mono-nerd-font
brew install font-fira-code-nerd-font
```

Enable the font in your terminal app
or in VSCode as

```json
{
  "editor.fontFamily": "JetBrainsMono Nerd Font"
}
```
