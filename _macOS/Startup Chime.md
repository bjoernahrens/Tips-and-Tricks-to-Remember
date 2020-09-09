---

---

# Startup Chime

On newer Macs, the startup chime is disabled by default. This simple command reenables it.

```shell
sudo nvram StartupMute=%00
```

Source:
[Tweet by Paul Hudson (@twostraws)](https://twitter.com/twostraws/status/1230983889830764544?s=21)


To reset:

```shell
sudo nvram -d StartupMute
```

or (not sure which works)

```shell
sudo nvram StartupMute=%100
```

