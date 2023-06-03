let count = 0;

// const displayValue = document.getElementById("value")
const displayValue = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((buttonItem) => {
  buttonItem.addEventListener("click", (e) => {
    const classeName = e.currentTarget.classList;

    if (classeName.contains("decrease")) {
      count--;
    } else if (classeName.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    displayValue.textContent = count;

    if (count < 0) {
      displayValue.style.color = "red";
    } else if (count > 0) {
      displayValue.style.color = "green";
    } else {
      displayValue.style.color = "";
    }
  });
});
