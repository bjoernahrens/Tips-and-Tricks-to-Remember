---

---


To override the gitconfig for multiple folders, add this at the end of the global gitconfig file (usually at ```~/.gitconfig``` or ```~/.git/config```)

```yaml
[includeIf "gitdir:~/toplevelFolder1/"]
  path = ~/topLevelFolder1/.gitconfig_include
```