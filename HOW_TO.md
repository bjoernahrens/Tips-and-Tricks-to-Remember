# How To

## Update Gems

```sh
gem update
gem update --system
```

(If the version of bundler has changed, you may have to delete the
`Gemfile.lock`)

```sh
bundle install
```

## Add a new section (folder)

1. Create a new folder starting with an underscore (and with a name that is not
   reserved for Jekyll)
2. Add a new entry in `_config.yml` under `collections` using the same name
   without the leading underscore (and without any content).

   ```yaml
   collections:
     new_section:
   ```

3. Create a new `new_section.html` file in the `paths` folder. Remember to
   change the name in the `permalink` and the for-loop at `site.new_section`.

   ```html
   ---
   layout: default
   title: The New Section
   permalink: /new-section/
   ---

   <h2>The New Section</h2>
   <ul>
     {% for tip in site.new_section %}
     <li>
       <p>{{ tip.content | markdownify }}</p>
       <hr />
       <hr />
     </li>
     {% endfor %}
   </ul>
   ```

4. Add the link to `index.md`:
   ```html
   <a href="/new-section">New Section</a> <br />
   ```

## Add a permalinked post to the header

Simply give it a property of

```json
include_in_header: true
```

## Modify the layout

see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
