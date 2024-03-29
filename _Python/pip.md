---
subtitle: Pip
---

```sh
python -m pip
```

## Upgrade all outdated packages

```sh
pipupgradeall() {
	pip --version
	pip list --outdated
	outdated=$(pip list --outdated --format=json)
	if [ $(echo "$outdated" | jq '. | any(.name | contains ("pip"))') = "true" ]; then
		pip install -U pip
	fi
	echo "$outdated" |
		jq '.[].name | select(. != "pip")' |
		xargs -n1 pip install -U
}
```

## Install from requirements

Some Python projects provide a `requirements.txt` file which contains all the required packages. This file has the following pattern:

```
FirstPackage               # Latest version
SecondPackage == 1.0.4     # Specific version
ThirdPackage >= 1.0.4      # Minimum version
FouthPackage >= 1.0, < 1.3 # Maximum version
...
```

```
pip install -r /path/to/requirements.txt
```
