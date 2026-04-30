function ExperienceView(){
    const experienceContainer= document.getElementById("experience-container");
    if(!experienceContainer){
        console.log("experience not found");
        return;
    }
    experienceContainer.innerHTML = "";
    experiencesData.forEach(function(experience){
        const card2 = document.createElement("div");
        card2.className = " h-30 w-210 ml-15 p-2 text-center bg-white rounded-3xl shadow-lg hover:bg-red-300";

        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-10 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

        const iconcard1 = document.createElement("span");
        iconcard1.className = "text-2xl text-white font-bold";
        iconcard1.textContent = experience.label;
        
        iconBox.appendChild(iconcard1);

        const experienceCollege = document.createElement("h3");
        experienceCollege.className ="text-xl font-bold mb-2";
        experienceCollege.textContent =experience.college;

        const experienceStudy = document.createElement("p");
        experienceStudy.className ="text-xl font-bold mb-2";
        experienceStudy.textContent =experience.study;

         const experiencescore = document.createElement("h1");
         experiencescore.className = "text-sm font-bold";
         experiencescore.textContent = experience.CGPA;


        const experiencelabel = document.createElement("p");
        experiencelabel.className = "text-sm";
        experiencelabel.textContent = experience.label;



      card2.appendChild(experienceStudy);
       card2.appendChild(experienceCollege);
      iconBox.appendChild(experiencelabel);
      card2.appendChild(experiencescore);
       experienceContainer.appendChild(card2);

    });
}
 ExperienceView();