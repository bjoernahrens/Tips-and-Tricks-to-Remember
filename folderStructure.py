import os

with open(".gitignore") as f1:
    ignoredFiles = list(f1)
with open("ignoredFilesInWebsite.txt") as f2:
    ignoredFiles += list(f2)
ignoredFiles = [x.strip().lower() for x in ignoredFiles]

with open("ignoredFoldersInWebsite.txt") as f3:
    ignoredFolders = list(f3)
ignoredFolders = [x.strip() for x in ignoredFolders]

def writeStructureArray(startpath):
    first = True
    with open("folderStructure.json", 'w') as f:
        f.write('{ "files": [\n')
        for root, dirs, files in os.walk(startpath):
            for file in files:
                if any(ignored in root for ignored in ignoredFolders):
                    continue
                if file.lower() in ignoredFiles:
                    continue
                if first:
                    first = False
                else:
                    f.write(",\n")
                
                f.write(' "' + root + "/" + file + '"')
                
        f.write("]} \n")
writeStructureArray(".")


def writeStructureArraySmart(startpath):
    first = True
    with open("folderStructure.json", 'w') as f:
        f.write('{ "files": [\n')
        for root, dirs, files in os.walk(startpath):
            if any(ignored in root for ignored in ignoredFolders):
                continue
            
            for file in files:
                if file.lower() in ignoredFiles:
                    continue
                if first:
                    first = False
                else:
                    f.write(",\n")
                
                f.write(' "' + root + "/" + file + '"')
                
        f.write("]} \n")
writeStructureArraySmart(".")