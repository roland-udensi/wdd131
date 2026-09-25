const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

// lastModified is a property of the document object.It gives you the date / time when the document was last modified.