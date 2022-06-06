---
subtitle: Homebrew (or just brew)
order: 0
---

> The Missing Package Manager for macOS

Find more information under [brew.sh](https://brew.sh/)

## What does Homebrew do?

- Homebrew installs the stuff you need that Apple didn’t.
  ```sh
  brew install <name>
  ```
- Homebrew installs packages to their own directory and then symlinks their
  files into `/usr/local`.
- Homebrew won’t install files outside its prefix and you can place a Homebrew installation wherever you like.
- It's all Git and Ruby underneath, so hack away with the knowledge that you can easily revert your modifications and merge upstream updates.
- Homebrew complements macOS. Install your RubyGems with `gem` and their dependencies with `brew`.
- "To install, drag this icon..." – no more. Homebrew Cask installs macOS apps, fonts and plugins and other non-open source software:
  ```sh
  brew install --cask <name>
  ```
