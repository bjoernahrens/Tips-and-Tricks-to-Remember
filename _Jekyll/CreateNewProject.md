---

---

## Create new Jekyll Project

Create a new project that includes a ```Gemfile```:  
```shell
bundle init
```

Add Jekyll:  
```shell
bundle add jekyll
```

Run the setup from Github Pages, override the existing project with the ```--force``` flag:  
```shell
bundle exec jekyll 4.0.0 new . --force
```