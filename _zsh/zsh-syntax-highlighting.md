---
subtitle: zsh Syntax Highlighting
order: 2
---

## Install via Oh My ZSH

1. Clone it into the `ZSH_CUSTOM` directory:
   ```sh
   git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
   ```
2. Add to plugins in `.zshrc` (as the last plugin)
   ```sh
   plugins=( [plugins...] zsh-syntax-highlighting)
   ```

## Install via Homebrew

```sh
brew install zsh-syntax-highlighting
```

If not done automatically, add this to `~/.zshrc`:

```sh
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```
