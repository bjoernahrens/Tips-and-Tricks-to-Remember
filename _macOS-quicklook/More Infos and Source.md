# Quicklook Plugins

Sources:

* my own experience
* [github.com/sindresorhus/quick-look-plugins](https://github.com/sindresorhus/quick-look-plugins) (under Public Domain)

---
## More Info
_also from [github.com/sindresorhus/quick-look-plugins](https://github.com/sindresorhus/quick-look-plugins)_

#### Catalina notes
To get plugins working in Catalina, you will need to remove the quarantine attribute.

Run this to see the attributes:

```shell
xattr -r ~/Library/QuickLook
```

And run this to remove the attributes:

```shell
xattr -d -r com.apple.quarantine ~/Library/QuickLook
```

####Manually
Click "download manually"
Move the downloaded .qlgenerator file to ~/Library/QuickLook
Run qlmanage -r