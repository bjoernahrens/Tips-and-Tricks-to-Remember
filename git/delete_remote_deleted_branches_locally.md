
When a branch gets removed on the remote, it may stay locally because it was checked out before.
To remove remotely removed branches locally as well, do this:

German:
```
git fetch -p && for branch in `git branch -vv | grep ': entfernt]' | awk '{print $1}'`; do git branch -D $branch; done
```
English:
```
git fetch -p && for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
```