function setup(button) {
  // Write your code here.
  setTimeout(() => {
    button.click = button.style.display = "none";
  }, 1000);
}

// Example case.
document.body.innerHTML = `<button type="button" id="btn">Hide Me!</button>`;

setup();

var button = document.getElementById("btn");
button.click();
console.log(button.style.display != "none");
