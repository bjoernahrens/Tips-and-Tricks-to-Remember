---
subtitle: Creating a new Jekyll Project
---

Create a new project that includes a `Gemfile`:

```sh
bundle init
```

Add Jekyll:

```sh
bundle add jekyll
```

Run the setup from Github Pages, override the existing project with the `--force` flag:

```sh
bundle exec jekyll 4.0.0 new . --force
```
