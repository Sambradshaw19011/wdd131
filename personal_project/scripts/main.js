const projects = [
  {
    title: "Portfolio Website",
    category: "web",
    description: "A responsive multi-page portfolio website built with semantic HTML, CSS, and JavaScript. It focuses on accessibility, clean design, and clear communication.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    keywords: ["portfolio", "website", "responsive", "accessibility"],
    link: "index.html"
  },
  {
    title: "Recipe Book Project",
    category: "school",
    description: "A class project focused on building a structured and visually organized recipe experience using modern layout and component styling.",
    technologies: ["HTML", "CSS", "JavaScript"],
    keywords: ["recipe", "school", "layout", "ui"],
    link: "projects.html"
  },
  {
    title: "Hike Finder",
    category: "web",
    description: "A web application concept for browsing hiking information with clear layout, data presentation, and interaction patterns.",
    technologies: ["HTML", "CSS", "JavaScript"],
    keywords: ["hike", "finder", "web app", "interactive"],
    link: "projects.html"
  },
  {
    title: "Housing Price Model",
    category: "data",
    description: "A machine learning project focused on predicting housing prices using engineered features, evaluation metrics, and model tuning.",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
    keywords: ["machine learning", "housing", "prediction", "analytics"],
    link: "projects.html"
  },
  {
    title: "Bank Marketing Analysis",
    category: "python",
    description: "A data analysis and classification project using structured data, model evaluation, and business-focused interpretation of results.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    keywords: ["bank", "classification", "analysis", "python"],
    link: "projects.html"
  },
  {
    title: "SQL and Data Projects",
    category: "data",
    description: "Database and data workflow projects involving SQL queries, table structure design, and transforming data for reporting and analysis.",
    technologies: ["SQL", "SQLite", "Python"],
    keywords: ["sql", "database", "reporting", "etl"],
    link: "projects.html"
  },
  {
    title: "Course Assignments Collection",
    category: "school",
    description: "A group of school projects demonstrating steady growth in layout design, JavaScript logic, accessibility, and responsive development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    keywords: ["assignments", "class", "school", "frontend"],
    link: "projects.html"
  }
];

function setFooterYear() {
  const yearSpan = document.querySelector("#currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function setupMenu() {
  const menuButton = document.querySelector("#menuButton");
  const siteNav = document.querySelector("#siteNav");

  if (!menuButton || !siteNav) return;

  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

function createProjectCard(project) {
  return `
    <article class="card project-card">
      <div class="project-top">
        <h3>${project.title}</h3>
        <span class="badge">${project.category}</span>
      </div>
      <p>${project.description}</p>
      <div class="tech-list">
        ${project.technologies.map((tech) => `<span class="tech-item">${tech}</span>`).join("")}
      </div>
      <a class="project-link" href="${project.link}">Learn more</a>
    </article>
  `;
}

function filterProjects(projectList, selectedCategory, searchText) {
  const normalizedSearch = searchText.toLowerCase().trim();

  return projectList.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(normalizedSearch)) ||
      project.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedSearch));

    return matchesCategory && matchesSearch;
  });
}

function renderProjects(projectList) {
  const container = document.querySelector("#projectContainer");
  const emptyMessage = document.querySelector("#emptyMessage");
  const resultsCount = document.querySelector("#resultsCount");

  if (!container || !emptyMessage || !resultsCount) return;

  container.innerHTML = projectList.map(createProjectCard).join("");

  resultsCount.textContent = projectList.length === 1
    ? "1 project found"
    : `${projectList.length} projects found`;

  emptyMessage.hidden = projectList.length !== 0;
}

function setupProjectFilters() {
  const container = document.querySelector("#projectContainer");
  const searchInput = document.querySelector("#searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!container || !searchInput || filterButtons.length === 0) return;

  let currentCategory = "all";
  let currentSearch = "";

  renderProjects(projects);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
      button.classList.add("active-filter");

      currentCategory = button.dataset.filter;

      const filtered = filterProjects(projects, currentCategory, currentSearch);
      renderProjects(filtered);
    });
  });

  searchInput.addEventListener("input", (event) => {
    currentSearch = event.target.value;

    const filtered = filterProjects(projects, currentCategory, currentSearch);
    renderProjects(filtered);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  setupMenu();
  setupProjectFilters();
});
