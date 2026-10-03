const currentYear = new Date().getFullYear();


const yearElement = document.querySelector("#currentyear")
yearElement.textContent = currentYear

const modifiedElement = document.querySelector("#lastModified")
modifiedElement.textContent = document.lastModified