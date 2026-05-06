function renderEducation() {
    const educationContainer = document.getElementById("education-container");
    if (!educationContainer) {
        console.log("education container not found");
        return;
    }

    educationContainer.innerHTML = "";

    experiencesData.forEach((education) => {
        const card = document.createElement("article");
        card.className = "group overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-left text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-blue-500/20";

        const badge = document.createElement("span");
        badge.className = "inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 shadow-inner";
        badge.textContent = education.label;

        const title = document.createElement("h3");
        title.className = "mt-6 text-2xl font-semibold leading-tight text-white";
        title.textContent = education.study;

        const year = document.createElement("p");
        year.className = "mt-3 text-sm uppercase tracking-[0.18em] text-slate-400";
        year.textContent = education.year;

        const college = document.createElement("p");
        college.className = "mt-4 text-base text-slate-300";
        college.textContent = education.college;

        const cgpa = document.createElement("p");
        cgpa.className = "mt-4 text-sm font-semibold text-slate-200";
        cgpa.textContent = `Score: ${education.CGPA}`;

        const description = document.createElement("p");
        description.className = "mt-4 leading-7 text-slate-300";
        description.textContent = education.description;

        const details = document.createElement("div");
        details.className = "mt-6 flex flex-wrap gap-3";

        const detailChip = document.createElement("span");
        detailChip.className = "rounded-full bg-slate-800 px-4 py-2 text-xs text-slate-200 shadow-sm";
        detailChip.textContent = `Advanced coursework and academic leadership`;
        details.appendChild(detailChip);

        card.appendChild(badge);
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(college);
        card.appendChild(cgpa);
        card.appendChild(description);
        card.appendChild(details);

        educationContainer.appendChild(card);
    });
}

renderEducation();