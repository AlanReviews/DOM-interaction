window.onload = addElement

function addElement() {
    let newDiv = document.createElement("div")
    let newContent = document.createTextNode("Hello this was inserted by JS")

    newDiv.appendChild(newContent)

    let currentDiv = document.getElementById("div1")

    currentDiv.appendChild(newDiv)
}

