const text = "Shajith";
let index = 0;

function type() {
  document.getElementById("typing").textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 150);
  }
}

type();