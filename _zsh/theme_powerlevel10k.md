---
subtitle: Powerlevel10k
order: 1
---


> Powerlevel10k is a theme for Zsh. It emphasizes speed, flexibility and out-of-the-box experience.

https://github.com/romkatv/powerlevel10k

---

### Install using oh-my-zsh

```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.

During the next launch of zsh, you will be guided through the setup process. In the end, the program will add the following on the top of your `.zshrc`:

```sh
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
```

---

### Update

```zsh
git -C ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k pull
```
