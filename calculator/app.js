const funcButtons = document.querySelectorAll(".calc-btns");
let evalStack = "";
const output = document.querySelector(".display");
const operationalBtns = ["=", "AC", "DEL"];

funcButtons.forEach((btn) => {
  let btnValue = btn.innerText;
  btn.addEventListener("click", (e) => {
    if (!operationalBtns.includes(btnValue)) {
      evalStack += btnValue;
      output.innerText = evalStack;
    } else if (btnValue == "=") {
      try {
        output.innerText = eval(evalStack);
      } catch {
        output.innerText = "SYNTAX ERR";
      }
    } else if (btnValue == "DEL") {
      evalStack = evalStack.slice(0, -1);
      output.innerText = evalStack;
    } else {
      evalStack = "";
      output.innerText = evalStack;
    }
  });
});
