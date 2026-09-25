const currentYear = new Date().getFullYear();

// document.querySelector("#currentyear").textContent = currentYear;
// document.querySelector("#lastModified").textContent = document.lastModified;

//  OR
const yearElement = document.querySelector("#currentyear")
yearElement.textContent = currentYear

const modifiedElement = document.querySelector("#lastModified")
modifiedElement.textContent = document.lastModified

// lastModified is a property of the document object.It gives you the date / time when the document was last modified.

const button = document.querySelector("#hamburger");

const nav = document.querySelector("nav");

button.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    if (isOpen) {
        button.textContent = "❌"
    } else {
        button.textContent = "☰"
    }
    
});

