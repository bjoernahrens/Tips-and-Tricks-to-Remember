### Automatically show expanded view of print dialog (requires reboot)
```defaults write -g PMPrintingExpandedStateForPrint -bool TRUE```

### Modify Dock
```
defaults write com.apple.dock autohide-delay -float 0; killall Dock  
defaults write com.apple.dock autohide-time-modifier -float 0.4; killall Dock
```

### Disable Shadow in Screenshots
```defaults write com.apple.screencapture disable-shadow -bool TRUE; killall SystemUIServer```