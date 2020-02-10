## Markdown to HTML conversion

```
pandoc --metadata title="Markdown to HTML" -s -o output.html markdown_to_html.md
```  

- to merge multiple markdown files into a single html, just add more after the first one in a varargs style
- or ```pandoc -s -o output.html input*.md``` in glob style

- ```-s``` 
	tells pandoc to create a self-contained file (so it will contain <html></html> tags etc, rather than just generating a fragment)
- ```-o```  
	output.html specifies that output.html will be the output file