---
subtitle: Change Past Commits Using Rebase
order: 100
---

This may only be the last resort and can have destructive consequences.

If not otherwise applied, the commit date of _all_ past commits will be set to the current time.

[Abstracted from a post from Atlassian Bitbucket](https://confluence.atlassian.com/bitbucketserverkb/how-do-you-make-changes-on-a-specific-commit-779171729.html)

### Steps:

1. Find the commit you want to change
2. Copy the hash of the commit that was done _before_ the commit you want to change.
3. `git rebase -i <Earlier Commit Hash>`
4. In the opened text editor, locate the commit you want to change by its hash and change the word **pick** to **edit**. Close the text editor after this.
5. In the command line, change the commit. After any change, the commit message editor will open. Just close it.
   a. Author: `git commit --amend --author="Author Name <email@address.com>"`
   b. Date: `git commit --amend --date="$(date -R)"` or `git commit --amend --date="Thu, 15 Apr 2021 21:48:13 +0200"`
   c. Message: `git commit --amend -m "New Commit Message"`
6. Check `git log`
7. To continue: `git rebase --continue`
8. It may happen that there are conflics while applying the next commits. Check the files, add them and continue with `git rebase --continue`
9. Merge or force push
   a. `git pull`
   b. `git push origin main --force`
