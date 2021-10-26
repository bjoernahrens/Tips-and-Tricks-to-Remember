---
---

## Bundle

Create a file to save or backup your current brew setup and import it on a new
system.

Create a `Brewfile` that contains all casks/formulae/images/taps. Add
`--describe` to add a description comment above each line

```sh
brew bundle dump --describe
```

Uninstall all dependencies not listed from the Brewfile.

```sh
brew bundle cleanup
```

Check if all dependencies are installed from the Brewfile.

```sh
brew bundle check
```

List all dependencies present in the Brewfile.

```sh
brew bundle list
```
