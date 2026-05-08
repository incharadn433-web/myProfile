// education-render.js

function renderEducation() {

    const educationContainer =
        document.getElementById("education-container");

    if (!educationContainer) return;

    educationContainer.innerHTML = "";

    educationData.forEach((edu) => {

        // Card
        const card = document.createElement("div");

        card.className = `
            bg-white dark:bg-gray-800
            p-6
            rounded-3xl
            shadow-lg
            border
            border-gray-200
            dark:border-gray-700
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
        `;

        // Label
        const label = document.createElement("span");

        label.className = `
            inline-block
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
            bg-blue-100
            text-blue-700
            mb-4
        `;

        label.textContent = edu.label;

        // College
        const college = document.createElement("h2");

        college.className = `
            text-2xl
            font-bold
            text-black
            dark:text-white
            mb-3
        `;

        college.textContent = edu.college;

        // Study
        const study = document.createElement("p");

        study.className = `
            text-gray-600
            dark:text-gray-300
            leading-7
            mb-4
        `;

        study.textContent = edu.study;

        // Score
        const cgpa = document.createElement("p");

        cgpa.className = `
            text-green-600
            font-semibold
            mb-2
        `;

        cgpa.textContent = `Score: ${edu.CGPA}`;

        // Year
        const year = document.createElement("p");

        year.className = `
            text-sm
            text-gray-500
            dark:text-gray-400
        `;

        year.textContent = edu.year;

        // Append
        card.appendChild(label);

        card.appendChild(college);

        card.appendChild(study);

        card.appendChild(cgpa);

        card.appendChild(year);

        educationContainer.appendChild(card);
    });
}

// Initial Render
renderEducation();