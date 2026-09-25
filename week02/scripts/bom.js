const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const listitem = document.createElement("li");
const deletebutton = document.createElement("button");

listitem.textContent = input.value; 
deletebutton.textContent = "❌";
deleteButton.setAttribute("aria-label", `Remove ${inputValue}`);
listitem.append(deletebutton);

list.append(listitem);