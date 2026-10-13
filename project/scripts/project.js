const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-header nav");

function toggleMenu() {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);
}


const culturalFacts = [
    {
        title: "Igbo Language",
        text: "Igbo is a major language spoken by the Igbo people of southeastern Nigeria."
    },
    {
        title: "New Yam Festival",
        text: "The New Yam Festival is an important celebration that marks the beginning of the yam harvest."
    },
    {
        title: "Igbo Community",
        text: "Community and family relationships are important parts of traditional Igbo culture."
    },
    {
        title: "Traditional Clothing",
        text: "Igbo traditional clothing is often worn during ceremonies, festivals, weddings, and other important occasions."
    }
];

const factButton = document.querySelector("#factButton");
const factOutput = document.querySelector("#factOutput");

function showRandomFact() {
    const availableFacts = culturalFacts.filter((fact) => fact.title);
    const randomIndex = Math.floor(Math.random() * availableFacts.length);
    const fact = availableFacts[randomIndex];

    factOutput.innerHTML = `
        <strong>${fact.title}</strong>
        <br>
        ${fact.text}
    `;
}

if (factButton && factOutput) {
    factButton.addEventListener("click", showRandomFact);
}

const heritageForm = document.querySelector("#heritageForm");
const formResponse = document.querySelector("#formResponse");

function handleFormSubmit(event) {
    event.preventDefault();

    const visitorName = document.querySelector("#visitorName").value.trim();
    const interest = document.querySelector("#interest").value;
    const message = document.querySelector("#message").value.trim();

    if (visitorName && interest && message) {
        localStorage.setItem("visitorName", visitorName);

        formResponse.textContent = `
            Thank you, ${visitorName}! Your interest in ${interest} has been saved.
        `;

        heritageForm.reset();
    } else {
        formResponse.textContent = `
            Please complete all the fields before submitting.
        `;
    }
}

if (heritageForm && formResponse) {
    heritageForm.addEventListener("submit", handleFormSubmit);
}

const savedName = localStorage.getItem("visitorName");

if (savedName && formResponse) {
    formResponse.textContent = `
        Welcome back, ${savedName}! Thank you for visiting The Igbo Heritage.
    `;
}