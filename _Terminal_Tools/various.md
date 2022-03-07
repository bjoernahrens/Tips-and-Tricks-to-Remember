---
---

# Various Terminal Tools

## `tr` — translate characters

```
"Heeeello" -> tr -s "e" -> "Hello"
```

```
"  He ll o " -> tr -d " " -> "Hello"
```

## `xargs` — construct argument list(s) and execute utility

Use:

```sh
echo "He  ll  o" | tr -s " " | xargs echo
# prints: Hello
```
