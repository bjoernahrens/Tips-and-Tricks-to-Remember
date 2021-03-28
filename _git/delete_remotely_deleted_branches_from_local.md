---

---


When a branch gets removed on the remote, it may stay locally because it was checked out before.
To remove remotely removed branches locally as well, do this:  

German:  
```shell
git fetch -p && for branch in $(git for-each-ref --format '%(refname) %(upstream:track)' refs/heads | awk '$2 == "[entfernt]" {sub("refs/heads/", "", $1); print $1}'); do git branch -D $branch; done
```

English:  
```shell
git fetch -p && for branch in $(git for-each-ref --format '%(refname) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {sub("refs/heads/", "", $1); print $1}'); do git branch -D $branch; done
```

Alternatively, add this line to the ```.zshrc``` file:  
```shell
function gitcleanbranches() {
	git fetch -p && for branch in $(git for-each-ref --format '%(refname) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {sub("refs/heads/", "", $1); print $1}'); do git branch -D $branch; done
}
```
