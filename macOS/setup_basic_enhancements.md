### Automatically show expanded view of print dialog (requires reboot)
```defaults write -g PMPrintingExpandedStateForPrint -bool TRUE```

### Modify Dock
```
defaults write com.apple.dock autohide-delay -float 0; killall Dock  
defaults write com.apple.dock autohide-time-modifier -float 0.4; killall Dock
```

### Disable Shadow in Screenshots
```defaults write com.apple.screencapture disable-shadow -bool TRUE; killall SystemUIServer```

### Set Mouse Speed
- To read the current setting:  
	```defaults read -g com.apple.mouse.scaling```
- To override the setting:  
	```defaults write -g com.apple.mouse.scaling 8.0```