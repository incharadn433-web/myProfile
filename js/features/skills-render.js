function renderSkills() {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) {
        console.log("Skills container not found");
        return;
    }

    skillsContainer.innerHTML = "";
    skillsData.forEach(function(skill) {
        const card = document.createElement("article");
        card.className = "group p-8 bg-white rounded-3xl border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md";

        const cardHeader = document.createElement("div");
        cardHeader.className = "flex items-center justify-between gap-4";

        const iconBox = document.createElement("div");
        iconBox.className = "flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 shadow-sm";
        const iconText = document.createElement("span");
        iconText.className = "text-2xl font-bold";
        iconText.textContent = skill.shortLabel;
        iconBox.appendChild(iconText);

        cardHeader.appendChild(iconBox);

        const skillName = document.createElement("h3");
        skillName.className = "mt-8 text-2xl font-bold text-slate-950";
        skillName.textContent = skill.name;

        const skillDescription = document.createElement("p");
        skillDescription.className = "mt-4 text-sm leading-7 text-slate-600";
        skillDescription.textContent = skill.description;

        card.appendChild(cardHeader);
        card.appendChild(skillName);
        card.appendChild(skillDescription);
        skillsContainer.appendChild(card);
    });

    console.log("Skills rendered successfully");
}
