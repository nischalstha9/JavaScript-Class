const ans = document.getElementsByClassName("ans")[0];
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const op1 = parseFloat(document.getElementById("oper1").value);
    const op2 = parseFloat(document.getElementById("oper2").value);
    const operator = e.target.attributes.id.value;
    ans.innerText = eval(op1 + operator + op2);
  });
});
