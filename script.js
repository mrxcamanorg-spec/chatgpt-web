// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

// 📱 IMAGE SLIDER
let images = ["phone1.jpg","phone2.jpg","phone3.jpg"];
let i = 0;

setInterval(() => {
  i++;
  if(i >= images.length) i = 0;
  document.getElementById("slide").src = images[i];
}, 2000);
