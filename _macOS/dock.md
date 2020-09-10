---
Title: Dock
---

# Dock

## Autohide Delay
The delay between moving your mouse to the bottom of the screen and the dock actually appearing. 0 means instantly.

```shell
defaults write com.apple.dock autohide-delay -float 0; killall Dock
```

## Autohide Speed
The speed at which the dock appears

```shell
defaults write com.apple.dock autohide-time-modifier -float 0.4; killall Dock
```

## Make the Icons of Hidden Apps Transparent
When you hide an app (via Cmd + H), the app icon in the dock will become transparent.

````shell
defaults write com.apple.dock showhidden -bool TRUE; killall Dock
````