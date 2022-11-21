---
subtitle: venv
---

## Create your virtual Python environment

```sh
python -m venv env
```

Instead of `env`, you can use any name.

## Automatically loading and unloading using direnv

Create (or add to) the `.envrc` file in your project.
Add the following to it (replace env if you chose a different name)

```sh
source env/bin/activate
```
