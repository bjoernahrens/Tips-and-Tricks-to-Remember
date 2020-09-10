---

---


When a branch gets removed on the remote, it may stay locally because it was checked out before.
To remove remotely removed branches locally as well, do this:  

German:  
```shell
git fetch -p && for branch in `git branch -vv | grep ': entfernt]' | awk '{print $1}'`; do git branch -D $branch; done
```
English:  
```shell
git fetch -p && for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
```

Alternatively, add this line to the ```.zshrc``` file:  
```shell
alias gitcleanbranches='git fetch -p && for branch in `git branch -vv | grep ": entfernt]" | awk "{print $1}"`; do git branch -D $branch; done'
```

*Note:* If you use double-quotes ```"``` instead of single-quotes ```'```, zsh will print ```fatal: not a git repository (or any of the parent directories): .git``` everytime a new window is opened.
