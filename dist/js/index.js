var svgCircle = document.getElementById("svgCircle");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");
var main = document.getElementById("main");
var infoBox = document.getElementById("infoBox");
var textBox1 = document.getElementById("text-box1");
var textBox2 = document.getElementById("text-box2");
var textBox3 = document.getElementById("text-box3");
var textBox4 = document.getElementById("text-box4");
var textBox5 = document.getElementById("text-box5");
var food = document.getElementById("food");
var list = document.querySelectorAll("#li");

textBox2.style.opacity = "0";
textBox3.style.opacity = "0";
textBox4.style.opacity = "0";
textBox1.style.opacity = "0";
textBox5.style.opacity = "10";

food.style.color = "black";
list.forEach((li) => {
  li.style.color = "black";
});

main.style.backgroundImage = "url(../images/meat1.jpg)";

step1.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "1004";
  main.style.backgroundImage = "url(../images/eggs1.jpg)";
  infoBox.style.top = "-350px";
  textBox2.style.opacity = "0";
  textBox3.style.opacity = "0";
  textBox4.style.opacity = "0";
  textBox5.style.opacity = "0";
  textBox1.style.opacity = "10";
  food.style.color = "black";
  list.forEach((li) => {
    li.style.color = "black";
  });
});
step2.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "753";
  main.style.backgroundImage = "url(../images/pizza1.jpg)";
  infoBox.style.top = "-350px";
  textBox1.style.opacity = "0";
  textBox3.style.opacity = "0";
  textBox4.style.opacity = "0";
  textBox5.style.opacity = "0";
  textBox2.style.opacity = "10";
  food.style.color = "black";
  list.forEach((li) => {
    li.style.color = "black";
  });
});
step3.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "502";
  main.style.backgroundImage = "url(../images/hamburger.jpg)";
  textBox2.style.opacity = "0";
  textBox1.style.opacity = "0";
  textBox4.style.opacity = "0";
  textBox5.style.opacity = "0";
  textBox3.style.opacity = "10";
  food.style.color = "#fff";
  list.forEach((li) => {
    li.style.color = "#fff";
  });
});
step4.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "251";
  main.style.backgroundImage = "url(../images/pasta1.jpg)";
  textBox2.style.opacity = "0";
  textBox3.style.opacity = "0";
  textBox1.style.opacity = "0";
  textBox5.style.opacity = "0";
  textBox4.style.opacity = "10";
  food.style.color = "black";
  list.forEach((li) => {
    li.style.color = "black";
  });
});
step5.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "0";
  main.style.backgroundImage = "url(../images/meat1.jpg)";
  textBox2.style.opacity = "0";
  textBox3.style.opacity = "0";
  textBox4.style.opacity = "0";
  textBox1.style.opacity = "0";
  textBox5.style.opacity = "10";
  food.style.color = "black";
  list.forEach((li) => {
    li.style.color = "black";
  });
});
