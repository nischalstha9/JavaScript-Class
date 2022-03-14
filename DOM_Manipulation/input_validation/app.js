const name_text = document.querySelector("#name");
const name_text_op = document.querySelector("#name_txt_op");

name_text.addEventListener("keyup", (e) => {
  name_text_op.innerText = `Your name is ${e.target.value}`;
});

const select_vehicle = document.querySelector("#vehicle_select");
const select_vehicle_op = document.querySelector("#vehicle_op");
select_vehicle.addEventListener("change", (e) => {
  select_vehicle_op.innerText = `Your vehicle is ${e.target.value}`;
});

const gender_radio = document.querySelectorAll("#gender");
const gender_radio_op = document.querySelector("#gender_op");
gender_radio.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    gender_radio_op.innerText = `Your gender is ${e.target.value}`;
  });
});

const accept_checkbox = document.querySelector("#accept_terms");
const accept_checkbox_op = document.querySelector("#checkbox_op");
accept_checkbox.addEventListener("click", (e) => {
  accept_checkbox_op.innerText = `You have ${
    e.target.checked ? "accepted" : "rejected"
  } terms.`;
});
