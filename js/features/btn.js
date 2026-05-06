// Create button
const btn = document.createElement("button");
btn.innerText = "⤒ Top";
btn.title = "Back to top";
btn.setAttribute("aria-label", "Back to top");

// Style button
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.left = "20px";
btn.style.padding = "12px 16px";
btn.style.fontSize = "16px";
btn.style.fontWeight = "700";
btn.style.background = "linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "9999px";
btn.style.cursor = "pointer";
btn.style.boxShadow = "0 18px 35px rgba(37, 99, 235, 0.2)";
btn.style.transform = "translateY(0)";
btn.style.transition = "transform 0.2s ease, opacity 0.2s ease";
btn.style.display = "none"; // hidden initially
btn.style.zIndex = "1001";

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