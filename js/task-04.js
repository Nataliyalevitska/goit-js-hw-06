let counterValue = 0;
const counterEl = document.querySelector("#value");
const btnEl = document.querySelectorAll("button");
[...btnEl].forEach((item) => {
  item.addEventListener("click", upDateValue);
});
function upDateValue(event) {
  if (event.target.dataset.action === "decrement") {
    counterValue -= 1;
    counterEl.textContent = counterValue;
  }
  if (event.target.dataset.action === "increment") {
    counterValue += 1;
    counterEl.textContent = counterValue;
  }
}
