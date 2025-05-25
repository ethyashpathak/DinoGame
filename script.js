const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const btn=document.getElementById("btn");
const status1=document.getElementById("status");
btn.addEventListener("click",resetGame)
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  jump();
});
document.addEventListener("touchstart",jump())
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}
const style = document.createElement("style");
style.innerHTML = `
  .jump {
    animation: jump 0.3s linear;
  }

  @keyframes jump {
    0% { bottom: 0; }
    50% { bottom: 200px; }
    100% { bottom: 0; }
  }
`;
document.head.appendChild(style);
let cactusMove; // store globally so you can access it elsewhere
let isAlive
function moveCactus() {
    clearInterval(cactusMove);
  cactus.style.left = "600px";

  cactusMove = setInterval(() => {
    let left = parseInt(cactus.style.left);
    cactus.style.left = left - 5 + "px";

    if (left < -20) {
      cactus.style.left = "600px"; // Reset
    }
  }, 10);
}
function checkCollision() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop > 130) {
    status1.innerHTML = "💀 Game Over!";
    clearInterval(isAlive);
    clearInterval(cactusMove);
  }
}
checkCollision()
function resetGame() {
  cactus.style.left = "600px";
  status1.innerHTML="Lets Go..."
  isAlive = setInterval(checkCollision, 10);
  moveCactus() 
}



