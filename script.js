image = document.querySelector("#image")
randomrotate = 0;
image.addEventListener("click", e => {
  image.classList.toggle("move")
})
document.querySelector("#image").onclick = function() {
  randoml = Math.random() * 500;
  randomt = Math.random() * 500;
  randomb = Math.random() * 500;
  randomr = Math.random() * 500;
  randomrotate = Math.random() * 360;
  document.getElementById("image").style.paddingLeft = randoml.toString() + "px";
  document.getElementById("image").style.paddingTop = randomt.toString() + "px";
  document.getElementById("image").style.paddingBottom = randomb.toString() + "px";
  document.getElementById("image").style.paddingRight = randomr.toString() + "px";
  document.getElementById("image").style.transform = "rotate(" + randomrotate.toString() + "deg)";
}
document.querySelector("#reset").onclick = function() {
  document.getElementById("image").style.padding = "0px";
  document.getElementById("image").style.transform = "rotate(0deg)";
}