defaults write -g NSToolbarTitleViewRolloverDelay -float 0 # Finder proxy icon

## Dock
defaults write com.apple.dock autohide-delay -float 0           ## Dock Autohide Delay
defaults write com.apple.dock autohide-time-modifier -float 0.4 ## Dock Autohide Speed
defaults write com.apple.dock showhidden -bool TRUE
killall Dock

defaults write -g com.apple.mouse.scaling 12.0

defaults write -g PMPrintingExpandedStateForPrint -bool TRUE
