// Create button
const btn = document.createElement("button");
btn.innerText = "Back";

// Style button
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px 15px";
btn.style.fontSize = "16px";
btn.style.background = "black";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.display = "none"; // hidden initially
btn.style.zIndex = "1000";

document.body.appendChild(btn);

// Show/hide on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block"; // show
  } else {
    btn.style.display = "none"; // hide
  }
});

// Scroll to top smoothly
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});