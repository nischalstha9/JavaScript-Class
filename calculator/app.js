const funcButtons = document.querySelectorAll(".calc-btns")
let evalStack = ""
const output = document.querySelector(".display")
const operationalBtns = ["=", "AC"]

funcButtons.forEach(btn => {
    let btnValue = btn.innerText;
    btn.addEventListener("click", (e) => {
        if (!operationalBtns.includes(btnValue)) {
            evalStack += btnValue;
            output.innerText = evalStack;
        } else if (btnValue == "=") {
            output.innerText = eval(evalStack);
        } else {
            evalStack = ""
            output.innerText = evalStack;
        }
    })
})