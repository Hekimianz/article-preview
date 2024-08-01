const shareBtn = document.querySelector(".author__shareIcon--cont");
const shareIcon = shareBtn.querySelector(".author__shareIcon");
const shareCont = document.querySelector(".shareActive__cont");

shareBtn.addEventListener("click", () => {
  shareCont.classList.toggle("hidden");
  shareBtn.classList.toggle("active");
  shareIcon.classList.toggle("activeIcon");
});
