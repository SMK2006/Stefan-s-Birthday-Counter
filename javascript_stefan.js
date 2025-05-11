// 🎯 Set your target date here (ensure correct date format, here it is April 17, 2025)
const targetDate = new Date('2026-04-17T00:00:00').getTime();

let timer = setInterval(function () {
  const today = new Date().getTime();  // Current time

  // Calculate the difference
  const diff = targetDate - today;

  // If the target date has passed, stop the countdown
  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "🎉 It's time!";
    return;
  }

  // Time calculations
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
    <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div>";
}, 1000);



window.addEventListener("load", () => {
  let progress = 0;
  const progressBar = document.querySelector(".progress-bar");
  const percentageText = document.querySelector(".percentage");
  const car = document.querySelector(".car1");
  const loadingScreen = document.getElementById("loading-screen");

  const max = 100;
  const duration = 2000; // 4 seconds
  const interval = 50;
  const step = (max / (duration / interval));

  const loader = setInterval(() => {
    if (progress < max) {
      progress += step;
      const rounded = Math.min(Math.round(progress), 100);
      progressBar.style.width = `${rounded}%`;
      percentageText.textContent = `${rounded}%`;
      car.style.left = `calc(${rounded}% - 25px)`;
    } else {
      clearInterval(loader);
      loadingScreen.style.animation = "fadeOut 1s ease-out forwards";
      setTimeout(() => {
        loadingScreen.style.display = "none";
        document.getElementById('main-content').style.display = 'block';
      }, 1000);
    }
  }, interval);
});



