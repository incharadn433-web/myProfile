function projectView(){
    const projectsContainer = document.getElementById("projects-container");
    if(!projectsContainer){
        console.log("Projects not found");
        return;
    }
    projectsContainer.innerHTML = "";
    projectsData.forEach(function(project){
        const card1 = document.createElement("div");
        card1.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        //create icon
        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

       
        const iconcard = document.createElement("span");
        iconcard.className = "text-2xl text-white font-bold";
        
       
        iconBox.appendChild(iconcard);

       
        const projectName = document.createElement("h3");
        projectName.className ="text-xl font-bold mb-2";
        projectName.textContent = project.name;

        
        const projectStatus = document.createElement("h3");
        projectStatus.className ="text-xl font-bold mb-2 text-white";
        projectStatus.textContent = project.status;

        
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm";
        projectDescription.textContent = project.description;
    
        const projectTechnology = document.createElement("p");
        projectTechnology.className = "text-sm";
        projectTechnology.textContent = project.technologies;

        const projectLiveDemo = document.createElement("p");
        projectLiveDemo.className = "text-sm";
        projectLiveDemo.textContent = project.liveDemo;


    
        card1.appendChild(iconBox);
        iconBox.appendChild(projectStatus);
        
        card1.appendChild(projectName);
        card1.appendChild(projectDescription);
        card1.appendChild(projectTechnology);
        card1.appendChild(projectLiveDemo);
        projectsContainer.appendChild(card1);
    });
    console.log("projects opened successfully");
}
