// for loop

for (let i = 1; i <= numberOfDays; i++) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    const item = document.createElement("li");
    item.textContent = nextdaystring;
    document.querySelector("ul").appendChild(item);
}

// While loop

let i = 1;

while (i <= numberOfDays) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    const item = document.createElement("li");
    item.textContent = nextdaystring;
    document.querySelector("ul").appendChild(item);

    i++;
}



// DOM Manipulation Quick Chart
// Pattern	Syntax	Example	What you're doing
// 1. FIND	const x = document.querySelector(...)	const input = document.querySelector("input");	Find an existing HTML element
// 2. CREATE	const x = document.createElement(...)	const li = document.createElement("li");	Create a new HTML element
// 3. CHANGE TEXT	element.textContent = ...span.textContent = "Milk"; Put / change text inside an element
// 4. CHANGE VALUE	element.value = ...input.value = "";	Get or change an input's value
// 5. CONNECT	parent.appendChild(child)	li.appendChild(span);	Put one element inside another
// 6. REACT	element.addEventListener(...)	button.addEventListener("click", () => {...});	Tell an element what to do when something happens
// 7. REMOVE	element.remove()	li.remove();	Remove an element from the page
// 8. FOCUS	element.focus()	input.focus();	Put the cursor / focus on an element
// 9. APPEND
// parent.append(...)
// ul.append(li) Append can add both elements and texts and multiple objects




// Event properties

// Properties are pieces of information stored inside the event object.

// Property	Meaning	Example
// event.target	The element where the event happened	event.target → button
// event.key	The keyboard key that was pressed	event.key → "Enter"
// event.type	The type of event	event.type → "click"
// Easy way to remember

// Event object = information about the event.
// Event properties = specific pieces of that information.

// For example:

// event.target

// means “Which element did it happen to ?”

// event.key

// means “Which keyboard key was pressed ?”

// HOW TO CREATE A HAMBURGER ICON
// USER CLICKS
//     ↓
// JavaScript
//     ↓
// changes the STATE
//     ↓
// "open" class is added / removed
//     ↓
// CSS
//     ↓
// determines what OPEN looks like