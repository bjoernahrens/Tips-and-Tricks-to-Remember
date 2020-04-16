#!/bin/zsh

find . -type f -regex ".*/*.md" -name '*.*' -print0 | 
while IFS= read -r -d '' file; do
	if [ "$file" = "./README.md" ];
	then
		echo "Skipping README.md"
		continue
	fi
	echo "Compiling $file";
    pandoc -f gfm -t html -o "$file.rendered.html" "$file";
done
