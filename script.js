// Add Projects Dynamically
const projects = [
    { name: "Random Quote Generator", description: "A web app that generates random quotes using an API." },
    { name: "To-Do List App", description: "A simple to-do list application with add, edit, and delete functionality." },
    { name: "Calculator", description: "A basic calculator with arithmetic operations and a sleek UI." },
    { name: "Portfolio Website", description: "A personal portfolio website to showcase projects and skills." },
    { name: "Weather App", description: "A weather application that fetches real-time weather data." },
    { name: "Blog Platform", description: "A full-stack blog platform with user authentication and CRUD operations." }
];

const projectList = document.getElementById("projectList");
projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p class="description">${project.description}</p>
        <button class="readMore">Read More</button>
    `;
    projectList.appendChild(projectCard);
});

// Add Skills Dynamically
const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Responsive Design", "Git", "REST APIs"
];

const skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
    const skillItem = document.createElement("span");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});

// Toggle Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        formMessage.style.color = "var(--highlight)";
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});

// Read More Button Functionality
document.querySelectorAll(".readMore").forEach(button => {
    button.addEventListener("click", () => {
        const description = button.previousElementSibling;
        description.classList.toggle("show");
        button.textContent = description.classList.contains("show") ? "Read Less" : "Read More";
    });
});

// Display Current Date in Footer
const currentDate = document.getElementById("currentDate");
currentDate.textContent = `Today's Date: ${new Date().toLocaleDateString()}`;