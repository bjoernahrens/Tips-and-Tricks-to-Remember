---
subtitle: Requirements
---

### Ruby

Install via

```sh
brew install ruby@2.7
```

For the system to find this version of Ruby, you may need to add it to your PATH:

```sh
echo 'export PATH="/usr/local/opt/ruby@2.7/bin:$PATH"' >> ~/.zshrc
```

**Note**: As of January 2021, GitHub Pages does not support Ruby 3.0, that's why version 2.7 is installed here.

Experimentally, you can try Ruby 3.0, but it does not come with `webrick`, so you have to install that yourself:

```sh
bundle add webrick
```

### Bundler

Install as a Ruby gem:

```sh
gem install bundler
```
