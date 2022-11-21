---
subtitle: Launchpad
---

### Change the number of apps per row/column

The default values are 7 and 5.

```sh
defaults write com.apple.dock springboard-columns -int 10
defaults write com.apple.dock springboard-rows -int 8
defaults write com.apple.dock ResetLaunchPad -bool TRUE
killall Dock
```
