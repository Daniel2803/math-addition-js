

let box1 = document.getElementById("primary-number");
let box2 = document.getElementById("secondary-number");


let firstBox = Math.floor(Math.random() * 10);
let secoundBox = Math.floor(Math.random() * 10);

box1.innerHTML = firstBox;
box2.innerHTML = secoundBox;

document.getElementById("btn").addEventListener("click", function() {
  let guess = document.getElementById("guess").value;
  guess = Number(guess);
let answer = firstBox + secoundBox;

  if (guess === answer) {
    alert("Correct");
  } else if (guess !== answer) {
    alert("incorrect");
  }
})
