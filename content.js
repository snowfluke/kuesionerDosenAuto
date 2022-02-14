let allList = Array.from(document.querySelectorAll("ol"));
let choices = allList.slice(2).map((el) => el.children);

choices.forEach((el) => {
  let rd = Math.floor(Math.random() * 2);
  el[rd].children[0].children[0].click();
});

let textEval = document.querySelectorAll("textarea");
textEval.forEach((el) => (el.value = " "));

let submit = document.querySelector("button[type=submit]");
submit.click();
