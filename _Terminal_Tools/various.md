---
subtitle: Various Terminal Tools
---

## `tr` — translate characters

```sh
echo "Heeeello" | tr -s "e"
# prints: "Hello"
```

```sh
echo "  He ll o " | tr -d " "
# prints: "Hello"
```

## `xargs` — construct argument list(s) and execute utility

Use:

```sh
echo "He  ll  o" | tr -s " " | xargs echo
# prints: Hello
```
