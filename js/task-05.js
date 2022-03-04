const refs = {
  input: document.querySelector("#name-output"),
  output: document.querySelector(".text"),
};

refs.input.addEventListener("input", () => {
  refs.output.textContent = refs.input.value;
});
