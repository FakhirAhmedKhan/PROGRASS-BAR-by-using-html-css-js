const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

let currentStep = 1;

const updateSteps = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  if (currentStep < 1) currentStep = 1;
  if (currentStep > circles.length) currentStep = circles.length;

  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
  progressBar.style.width = progressPercentage + "%";
};
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});

// const circles = document.querySelectorAll(".circle"),
//   progressBar = document.querySelector(".indicator"),
//   buttons = document.querySelectorAll("button");

// let currentStep = 1;

// const updateSteps = (e) => {
//   if (e.target.id === "next") {
//     currentStep++;
//   } else {
//     currentStep--;
//   }

//   // Ensure currentStep is within the valid range
//   currentStep = Math.max(1, Math.min(currentStep, circles.length));

//   circles.forEach((circle, index) => {
//     if (index < currentStep) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });

//   const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
//   progressBar.style.width = progressPercentage + "%";
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", updateSteps);
// });
