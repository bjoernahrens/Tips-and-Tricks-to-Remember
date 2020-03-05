const createFileElement = (fileContent, folderName) => {
    let html = `<div class="file">`
    html += fileContent;
    html += `</div><br><hr><br>`
    document.getElementById(folderName).innerHTML += html;
}
const createFolderContainer = folderObject => {
    const html = `<div class="folder" id="${folderObject.name}"><h1>${folderObject.name}</h1></div>`
    document.getElementById("content").innerHTML += html;
    folderObject.children.forEach(file => {
        if (file.type !== '.html') {
            
        } else {

            fetch(file.path)
            .then(response => response.text())
            .then(fileContent => createFileElement(fileContent, folderObject.name))
        }
    });
}

const applyFolderStructure = () => {
    fetch('./folderStructure.json')
        .then(response => response.text())
        .then(responseObject => JSON.parse(responseObject))
        .then(json => {
            json.children.forEach(folderObject => {
                createFolderContainer(folderObject)
            });
        })

}

window.onload = () => applyFolderStructure();