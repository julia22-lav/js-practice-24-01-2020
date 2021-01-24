import "./styles.css";
import refs from "./refs.js";

const { nextBtn, finishBtn, prevBtn, stepValues } = refs;

const MAX_VALUE = 4;
let currentValue = 1;
console.log(content);
nextBtn.addEventListener("click", () => {
  console.log("next");

  let currentStep = stepValues[currentValue - 1];
  currentStep.classList.add("completed");
  currentValue += 1;
  msContentScript.textContent = `Текущий шаг ${currentValue}`;
  prevBtn.disabled = false;

  if (currentValue === MAX_VALUE) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
  //   console.log(currentStep);
});

prevBtn.addEventListener("click", () => {
  console.log("previous");
  let currentStep = stepValues[currentValue - 2];
  currentStep.classList.remove("completed");
  currentValue -= 1;
  content.innerText = `Текущий шаг ${currentValue}`;
  nextBtn.disabled = false;
  finishBtn.disabled = true;
  if (currentValue === 1) {
    prevBtn.disabled = true;
  }
});

console.dir(location);

finishBtn.addEventListener("click", () => {
  console.log("finish");
  location.reload();
});
