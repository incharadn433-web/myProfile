function renderSkills() {

  const skillsContainer =
    document.getElementById("skills-container");

  if (!skillsContainer) return;

  skillsContainer.innerHTML = "";

  skillsData.forEach(skill => {

    const card =
      document.createElement("div");

    card.className = `
      bg-white dark:bg-gray-800
      p-6
      rounded-2xl
      shadow-lg
      border
      border-gray-200
      dark:border-gray-700
      transition-all
      duration-300
      hover:scale-105
      w-full
    `;

    const title =
      document.createElement("h3");

    title.className = `
      text-xl
      font-bold
      text-black
      dark:text-white
      mb-3
    `;

    title.textContent = skill.name;

    const description =
      document.createElement("p");

    description.className = `
      text-gray-600
      dark:text-gray-300
      text-sm
      leading-7
    `;

    description.textContent =
      skill.description;

    card.appendChild(title);

    card.appendChild(description);

    skillsContainer.appendChild(card);
  });
}

renderSkills();