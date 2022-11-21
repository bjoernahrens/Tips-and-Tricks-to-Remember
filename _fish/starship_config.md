---
subtitle: Starship examples
order: 3
---


```toml
format = """
[┌$fill]()
([│]()$all)\
[│]()$directory
[└]()$character"""

right_format = "$cmd_duration ▶▶$time"

[fill]
symbol = "─"
style = "bold"

[time]
disabled = false
format = "[$time]($style)"
style = "bold red"

# Add the count of files to git_status
[git_status]
format = '([$ahead_behind$all_status]($style) )'
conflicted = "=${count}"
ahead = "⇡${count}"
behind = "[⇣${count}](green)"
diverged = "⇕⇡${ahead_count}⇣${behind_count}"
up_to_date = ""
untracked = "?${count}"
stashed = "[*${count}](green)"
modified = "[!${count}](#ffa500)"
staged = "[+${count}](#ffd700)"
renamed = "»${count}"
deleted = "✘${count}"


# Customs
[custom.flutter]
command = "cat $HOME/development/flutter/version" ## This is very slow
detect_files = ["pubspec.yaml"]
format = "via [Flutter $output](flutter_skyblue)"
```
