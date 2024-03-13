const count = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");
const buy = document.querySelector(".Buy");
const listcontainer = document.querySelector(".list-container");
const Totalsalary = document.querySelector(".Total-salary");

let number = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.innerText == "+") {
      number++;
    } else {
      number--;
    }
    count.innerHTML = number;
  });
});
let salary = 0;
buy.onclick = function () {
  let li1 = document.createElement("li");

  if (number == 0) {
    return null;
  } else {
    const coca = "Coca";
    const pricePerItem = 3000;
    const total = pricePerItem * number;

    li1.innerHTML =
      coca +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      number +
      " " +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      total +
      "រ";
    number = 0;
    listcontainer.appendChild(li1);
    count.innerHTML = 0;
    salary += total;
    Totalsalary.innerHTML = salary + "រ";
  }
};
