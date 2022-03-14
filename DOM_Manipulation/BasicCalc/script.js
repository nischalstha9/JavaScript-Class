const ans = document.querySelector(".ans");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const op1 = parseInt(document.querySelector("#oper1").value);
    const op2 = parseInt(document.querySelector("#oper2").value);
    const operator = e.target.attributes.id.value;
    ans.innerText = eval(op1 + operator + op2);
  });
});
