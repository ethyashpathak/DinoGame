# 🦖 Dino Game

A simple, fun, and addictive browser game inspired by the classic Chrome Dino!  
Jump over the cactus and see how long you can survive.  
Built with pure HTML, CSS, and JavaScript.

---

## 🚀 Features

- **Jumping Dino:** Press any key or tap the screen to make the dino jump.
- **Moving Cactus:** The cactus moves towards the dino—don’t let it hit you!
- **Game Over Detection:** The game ends if the dino collides with the cactus.
- **Responsive Controls:** Works with both keyboard and touch events.
- **Restart Button:** Instantly reset and play again!

---

## 🎮 How to Play

1. **Start the Game:**  
   Click the **Start/Reset** button to begin.

2. **Jump:**  
   - **Desktop:** Press any key to jump.
   - **Mobile:** Tap anywhere on the screen.

3. **Avoid the Cactus:**  
   Time your jumps to avoid colliding with the cactus.

4. **Game Over:**  
   If you hit the cactus, the game will display “💀 Game Over!”  
   Click the button to try again!

---

## 🛠️ How It Works

- The dino jumps using a CSS animation triggered by adding/removing a class.
- The cactus moves from right to left using JavaScript intervals.
- Collision detection checks if the dino and cactus overlap.
- The game can be reset at any time.

---

## 📦 Code Structure

- **index.html:** The game layout and elements.
- **style.css:** Basic styling and jump animation.
- **script.js:** All game logic (jumping, moving, collision, reset).

---

## ✨ Live on

https://ethyashpathak.github.io/DinoGame/

---

## 📝 Example Usage

```js
// Start the game
btn.addEventListener("click", resetGame);

// Jump with keyboard or touch
document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
```

---

## 💡 Customization Ideas

- Add a score counter.
- Add sound effects.
- Make the cactus speed up over time.
- Add more obstacles or power-ups.
- Style the dino and cactus with custom images.

---

## 🧑‍💻 Author

Made with ❤️ by Shaswat Pathak

---

## 📃 License

This project is open source and free to use!

---

**Enjoy the game and happy jumping! 🦖🌵**
