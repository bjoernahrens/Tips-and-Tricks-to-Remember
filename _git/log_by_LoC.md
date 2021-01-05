---

---

# git log by lines of code
```bash
function gitlogbyloc() {
	git ls-files | while read f; do git blame -w -M -C -C --line-porcelain "$f" | grep -I '^author '; done | sort -f | uniq -ic | sort -n --reverse
}
```
## Output looks like this:
````
710 author Ahsoka Tano
709 author Anakin Skywalker
501 author Not Committed Yet
````