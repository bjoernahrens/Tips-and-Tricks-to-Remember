---
---

# macOS

```sh
defaults write -g NSToolbarTitleViewRolloverDelay -float 0 # Finder proxy icon

## Dock
defaults write com.apple.dock autohide-delay -float 0 ## Dock Autohide Delay
defaults write com.apple.dock autohide-time-modifier -float 0.4 ## Dock Autohide Speed
defaults write com.apple.dock showhidden -bool TRUE
killall Dock

defaults write -g com.apple.mouse.scaling 12.0
defaults write -g PMPrintingExpandedStateForPrint -bool TRUE


/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew upgrade
brew install --cask iterm2

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" ## Oh My Zsh
```

### Add to `.zshrc`

```
#################################################################################################
#################################################################################################
# Zsh Syntax Highlighting (Needs to be placed at the very end of this file to include everything)
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## Finder sidebar
