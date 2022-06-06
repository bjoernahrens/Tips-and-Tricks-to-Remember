---
subtitle: jq — Command-line JSON processor
---

jq can transform JSON in various ways, by selecting, iterating, reducing
and otherwise mangling JSON documents.

Easiest:

```sh
# file.json:
# {
# 	"version": "1.0.0"
# }
cat file.json | jq ".version"
# prints: "1.0.0"
```

More complex:

This command will take an array of JSON objects as input and
return the sum of their "price" fields

```sh
# file.json:
# {
# 	"Lightsaber": {
# 		"price": 1234
# 	},
# 	"Blaster": {
# 		"price": 321
# 	}
# }
cat file.json | jq 'map(.price) | add'
# prints 1555
```
