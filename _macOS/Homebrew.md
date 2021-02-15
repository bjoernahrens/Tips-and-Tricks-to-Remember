---

---

# Homebrew (or just brew)
> The Missing Package Manager for macOS

Find more information under [brew.sh](https://brew.sh/)

also from brew.sh:

## What does Homebrew do?
* Homebrew installs the stuff you need that Apple didn’t.
	```shell
	brew install <name>
	```
* Homebrew installs packages to their own directory and then symlinks their files into `/usr/local`.
* Homebrew won’t install files outside its prefix and you can place a Homebrew installation wherever you like.
* It's all Git and Ruby underneath, so hack away with the knowledge that you can easily revert your modifications and merge upstream updates.
* Homebrew complements macOS. Install your RubyGems with `gem` and their dependencies with `brew`.
* "To install, drag this icon..." – no more. Homebrew Cask installs macOS apps, fonts and plugins and other non-open source software:
	```shell
	brew install --cask <name>
	```

Find available formulae at [formulae.brew.sh/](https://formulae.brew.sh/)

A few example formulae:

* nodejs
* OpenJDK
* Maven
* ruby
* youtube-dl
* zsh-completions
* zsh-syntax-highlighting

or casks:

* Firefox
* Visual Studio Code
* TextMate
* Docker
* Postgres
* iTerm

## Search

To search for formulae or casks:  
```shell
brew search <search term>
```

## Update & Upgrade
To check if there are updates for your installed formulae:
```shell
brew update
```

Now, to upgrade those formulae:  
```shell
brew upgrade
```

Some casks can be upgraded via ```brew``` as well:  
```shell
brew upgrade --cask
```
## Show Dependencies

```shell
brew deps --tree --installed
```

## Uninstall
Lastly, to uninstall a formulae or cask:  
```shell
brew uninstall <name>
```