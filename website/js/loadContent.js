const createFileElement = (fileContent, folderName) => {
    let html = `<div class="file">`
    html += fileContent;
    html += `</div><br><hr><br>`
    document.getElementById(folderName).innerHTML += html;
}
const createFolderContainer = (folderObject, parentFolderName) => {
    const html = `
    <div>
    <label for="hider-${parentFolderName}${folderObject.name}">
    <h1>
    <span class="expandable-indicator jb-mono-font">+</span>
    ${parentFolderName}${folderObject.name}
    </h1>
    </label>
    </div>
    <input class="hider-input" type="checkbox" id="hider-${parentFolderName}${folderObject.name}">
    <div class="folder" id="${folderObject.name}">
    </div>
    `
    document.getElementById("content").innerHTML += html;
    folderObject.children.forEach(file => {
        if (file.type === '.html') {
            fetch(file.path)
                .then(response => response.text())
                .then(fileContent => createFileElement(fileContent, folderObject.name))
        } else if (file.type === 'folder') {
            createFolderContainer(file, folderObject.name + " – ");
        }
    });
}

const applyClickEvents = () => {
    let exp = document.getElementsByClassName("expandable-indicator");
    let hider = document.getElementsByClassName("hider-input");
    for (let i = 0; i < exp.length; i++) {
        hider[i].onchange = () =>{
            exp[i].innerText = exp[i].innerText === "+" ? "–" : "+";
        }
    }
}

const applyFolderStructure = () => {
    fetch('./folderStructure.json')
        .then(response => response.text())
        .then(responseObject => JSON.parse(responseObject))
        .then(json => {
            json.children.forEach(folderObject => {
                createFolderContainer(folderObject, "")
            });
        })
        .then(() => {
            applyClickEvents();
        })

}

window.onload = () => applyFolderStructure();