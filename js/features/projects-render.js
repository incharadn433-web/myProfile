// renderProjects.js

function renderProjects() {

  const projectsContainer = document.getElementById("projects-container");
  const countDisplay = document.getElementById("project-count");

  if (!projectsContainer) return;

  // Clear old content
  projectsContainer.innerHTML = "";

  // Loop through projectsData from projects.js
  projectsData.forEach((project) => {

    // Card
    const card = document.createElement("div");

    card.className =
      "bg-dark dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition duration-300";

    // Title
    const title = document.createElement("h2");

    title.className =
      "text-xl font-bold mb-3 text-white-800 dark:text-white hover:text-blue-500 transition duration-300";

    title.textContent = project.title;

    // Description
    const description = document.createElement("p");

    description.className =
      " text-sm text-gray-400 dark:text-gray-300 mb-5";

    description.textContent = project.description;

    // Technologies
    const techContainer = document.createElement("div");

    techContainer.className = "mb-5";

    project.technologies.forEach((tech) => {

      const techBadge = document.createElement("span");

      techBadge.className =
        "inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2";

      techBadge.textContent = tech;

      techContainer.appendChild(techBadge);
    });

    // Status Badge
    const status = document.createElement("span");

    let statusClass = "";

    if (project.status === "LIVE") {
      statusClass = "bg-green-200 text-green-800";
    } else if (project.status === "DEMO") {
      statusClass = "bg-yellow-200 text-yellow-800";
    } else {
      statusClass = "bg-blue-200 text-blue-800";
    }

    status.className =
      `inline-block text-xs font-bold uppercase px-3 py-1 rounded-full ${statusClass}`;

    status.textContent = project.status;

    // Append Elements
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techContainer);
    card.appendChild(status);

    // Append Card
    projectsContainer.appendChild(card);
  });

  // Project Count
  if (countDisplay) {
    countDisplay.textContent = `${projectsData.length} Projects`;
  }
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});