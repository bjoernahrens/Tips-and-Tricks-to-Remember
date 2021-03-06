# Pip

```shell
python -m pip
```

## Upgrade all outdated packages

```shell
pipupgradeall() {
	pip list --outdated --format=freeze \
	| grep -v '^\-e' \
	| cut -d = -f 1 \
	| xargs -n1 pip install -U
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