let count = 0;

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("count").innerText = count;
}

function closePopup() {
  count = 0;
  document.getElementById("popup").style.display = "none";
}

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrease() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerText = count;
  }
}

const buttons = document.querySelectorAll(".card button");
buttons.forEach((button) => {
  button.addEventListener("click", openPopup);
});
