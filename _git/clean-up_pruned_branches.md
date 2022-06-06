---
subtitle: Clean-up branches that were deleted on remote
order: 2
---

When a branch gets removed on the remote, it may stay locally if it was checked out before.
To remove branches that were deleted on remote locally as well, do this:

First you need to fetch the pruned branches:

```sh
git fetch -p
```

```sh
"git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -D"
```

You can also add this to your `.gitconfig` as an alias:

```
[alias]
	clean-pruned-branches = "!git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -D"
```

Now you can simply run

```sh
git fetch -p
git clean-pruned-branches
```
