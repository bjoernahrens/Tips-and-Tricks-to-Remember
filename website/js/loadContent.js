const getHtmlFromFile = async (file) => {
    return await fetch(file)
        .then(async (response) => await response.text());
}

const createFilesContainer = async (files) => {
    let result = await files.reduce(async (acc, f) => {
        let fileHtml = await getHtmlFromFile(f);
        console.log(fileHtml)
        let newContent = `<div>${fileHtml}</div><br><hr><br>`
        return acc + newContent;
    }, "")
    return result;
}

const createFolderContainer = async (folder) => {
    let name = folder.name;
    let files = folder.files;
    let filesContainer = await createFilesContainer(files);
    return `<div> <div>${name}</div><div>${filesContainer}</div></div>`
}

const applyFolderStructure = async () => {
    await fetch('/folderStructureToBe.json')
        .then(response => response.text())
        .then(object => JSON.parse(object))
        .then((data) => {
            data.root.forEach(async folder => {
                let content = await createFolderContainer(folder);
                document.getElementById('content').innerHTML += content
            });
            return content;
        })
}

window.onload = () => applyFolderStructure();