let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
  if (counter == 78) {
    clearInterval();
  } else {
    counter = counter + 1;
    number.innerHTML = counter + "%";
  }
}, 27);
