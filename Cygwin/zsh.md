Install zsh from Cygwin installer

Install oh-my-zsh:  
```
git clone git://github.../oh-my-zsh.git ~/.oh-my-zsh
```

Setup .zshrc from oh-my-zsh template:  
```
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

Set zsh as standard:  
- edit the the shortcut/link to cygwin to:  
```
C:\...\cygwin64\mintty.exe -i /Cygwin.ico /bin/zsh --login
```
