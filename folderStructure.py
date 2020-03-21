import os
import errno
import json
import sys

with open(".gitignore") as f1:
    ignored = list(f1)
with open("webignore.txt") as f2:
    ignored += list(f2)
ignored = [x.strip().lower() for x in ignored]

def path_hierarchy(path):
    hierarchy = {
        'type': 'folder',
        'name': os.path.basename(path),
        'path': path,
    }
    
    try:
        hierarchy['children'] = [
            path_hierarchy(os.path.join(path, contents)) for contents in os.listdir(path) if os.path.basename(contents).lower() not in ignored
        ]
    except OSError as e:
        if e.errno != errno.ENOTDIR:
            raise
        hierarchy['type'] = os.path.splitext(path)[1]
        if hierarchy['type'] == "":
            hierarchy['type'] = "Unknown"
    return hierarchy

if len(sys.argv) >= 2:
    directory = sys.argv[1]
else:
    directory = os.getcwd()

fo = open("folderStructure.json", "w")

jsonResult = json.dumps(path_hierarchy(directory), indent=2, sort_keys=False,)

jsonResult = jsonResult.replace('/Users/bjorn/Documents/Tips and Tricks To Remember', '.')

fo.write(jsonResult)
fo.close()