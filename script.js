const button = document.querySelector("#recharge");
const statusLine = document.querySelector("#status");

const messages = [
  "ENERGYX ACTIVATED · FOCUS RESTORED",
  "VIRTUAL RECHARGE COMPLETE · LET'S GO",
  "SYSTEM BOOSTED · BACK TO BUSINESS"
];

let activation = 0;

button.addEventListener("click", () => {
  activation += 1;
  statusLine.textContent = messages[(activation - 1) % messages.length];
  button.querySelector("span:first-child").textContent = "RECHARGED";
  button.classList.add("activated");

  window.setTimeout(() => {
    button.querySelector("span:first-child").textContent = "ACTIVATE ENERGYX";
    button.classList.remove("activated");
  }, 1800);
});
