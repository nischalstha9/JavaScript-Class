const funcButtons = document.querySelectorAll(".calc-btns");
let evalStack = "";
const output = document.querySelector(".display");
const operationalBtns = ["=", "AC", "DEL"];

funcButtons.forEach((btn) => {
  let btnValue = btn.innerText;
  btn.addEventListener("click", (e) => {
    if (!operationalBtns.includes(btnValue)) {
      //if numbers clicked
      evalStack = evalStack == "0" ? btnValue : evalStack + btnValue;
      output.innerText = evalStack;
    } else if (btnValue == "=") {
      //if = clicked
      try {
        let res = eval(evalStack);
        evalStack = res;
        output.innerText = res;
      } catch {
        output.innerText = "SYNTAX ERR";
      }
    } else if (btnValue == "DEL") {
      //if DEL btn clicked
      evalStack = evalStack.slice(0, -1);
      output.innerText = evalStack;
    } else {
      // if AC clicked
      evalStack = "0";
      output.innerText = evalStack;
    }
  });
});
