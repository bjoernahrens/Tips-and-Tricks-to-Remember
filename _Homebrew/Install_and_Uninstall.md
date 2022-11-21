---
subtitle: Install and Uninstalling formulae or casks
order: 1
---

## Install

To install a formulae or cask, simply run

```sh
brew install <name>
```

or to be sure, you install the cask

```sh
brew install --cask <name>
```

## Uninstall

To uninstall a formulae or cask:

```sh
brew uninstall <name>
```

## Autoremove

Some formulae have dependencies on other formulae, therefore those are installed alongside.  
However, when you uninstall a formulae, those dependencies are not automatically cleaned up.  
To unistall formulae that you didn't directly installed and which are no longer needed by any other formulae, simply run the autoremove command:

`sh brew autoremove `
