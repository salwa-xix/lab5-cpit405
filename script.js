// ===== Task 1: Dark / Light mode =====
const themeBtn = document.getElementById("theme-btn");

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");
    themeBtn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    updateThemeButton();
});

updateThemeButton();


// ===== Task 2: Show More / Show Less =====
const aboutBtn = document.getElementById("about-btn");
const aboutExtra = document.getElementById("about-extra");

aboutBtn.addEventListener("click", function () {
    const isHidden = aboutExtra.classList.toggle("hidden");
    aboutBtn.textContent = isHidden ? "Show More" : "Show Less";
    aboutBtn.setAttribute("aria-expanded", String(!isHidden));
});


// ===== Task 3: Dynamic projects =====
const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A responsive personal website built to showcase my projects and skills. Designed mobile-first and deployed with GitHub Pages.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Task Manager App",
        description: "A to-do web application that lets users add, edit, and complete tasks. Uses localStorage to keep tasks saved between sessions.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript", "localStorage"]
    },
    {
        title: "Student Grades Database",
        description: "A course project that stores and reports student grades using SQL, with a Python script that generates summary reports for instructors.",
        category: "Programming",
        technologies: ["SQL", "Python"]
    }
];

const projectsContainer = document.getElementById("projects-container");

function renderProjects(category) {
    // Clear old cards first so nothing gets duplicated
    projectsContainer.innerHTML = "";

    const filtered = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    filtered.forEach(function (project) {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const desc = document.createElement("p");
        desc.textContent = project.description;

        const cat = document.createElement("p");
        cat.className = "project-category";
        cat.textContent = "Category: " + project.category;

        const tech = document.createElement("p");
        tech.className = "project-tech";
        tech.textContent = "Technologies: " + project.technologies.join(", ");

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "View Project";

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(cat);
        card.appendChild(tech);
        card.appendChild(link);

        projectsContainer.appendChild(card);
    });
}

// Show all projects when the page loads
renderProjects("All");


// ===== Task 4: Project filtering =====
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterButtons.forEach(function (b) {
            b.classList.remove("active");
        });
        button.classList.add("active");

        renderProjects(button.dataset.filter);
    });
});


// ===== Task 5: Print / Save as PDF =====
const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", function () {
    window.print();
});
