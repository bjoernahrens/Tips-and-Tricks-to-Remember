---
---

# direnv

> unclutter your .profile

Sources / More on [direnv.net](https://direnv.net/)

## Info

Store your environment variables that you only need in specific folders, in a dedicated `.envrc` file. That file will be loaded when entering that folder and will be unloaded upon exiting.

This helps to keep your `.zshrc`, `.profile`, etc. free of only project-specifically used `export`ed environment variables.

## Usage

1. Navigate to your target folder
2. Create a `.envrc` file and move your folder-specific exports and setup here
3. Security mechanism: Allow the `.envrc` file. This only has to be done once.
   ```sh
   direnv allow
   ```

## Install

Install using Homebrew:

```sh
brew install direnv
```

and add the following line at the end of your `.zshrc`:

```sh
emulate zsh -c "$(direnv hook zsh)"
```

## Compatibility with Powerlevel10k

When you use Powerlevel10k, you may have noticed a warning popping up when you open a new terminal and the opened directory contains a `.envrc` file.

To avoid that, add the following to your `.zshrc` file:

```sh
emulate zsh -c "$(direnv export zsh)"

## Regular Powerlevel10k setup
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

emulate zsh -c "$(direnv hook zsh)"
```

Source: [GitHub user romkatv](https://github.com/romkatv) on [issue romkatv/powerlevel10k#702](https://github.com/romkatv/powerlevel10k/issues/702)
