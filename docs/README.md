# 🪶 Memory Game

A minimal dark-themed **memory card game** built with **HTML, CSS, and JavaScript**.  
Flip the cards, find matching pairs, and race against time.

---

## 🎮 Features

- 4×4 grid (16 cards)
- Real-time move and timer tracking
- Automatic win detection
- Restart button for quick replay
- Smooth 3D flip animation
- Simple, dark stone-like aesthetic

---

## 🧩 Technologies Used

- **HTML5** — structure and DOM rendering  
- **CSS3** — layout, transitions, and responsive design  
- **JavaScript (ES6)** — game logic, shuffle, and timer system  

---

## 📁 Project Structure

```
memory-game/
├── index.html               # Main entry point
├── /css/
│   └── style.css            # Layout & visual styles
├── /js/
│   ├── data.js              # Card data (image paths, names)
│   ├── utils.js             # Helper functions (e.g., shuffle)
│   └── main.js              # Core game logic and state handling
├── /assets/
│   ├── /img/                # Card images (fire, leaf, skull, etc.)
│   └── /audio/              # Optional sound effects
|──/docs/
    └──README.md
```

---

## ⚙️ How It Works

1. Each game generates a shuffled deck (pairs of 8 unique cards).  
2. Click to flip two cards:
   - If they match → stay revealed.  
   - If not → flip back after 1 second.  
3. Moves and time are tracked dynamically.  
4. When all cards are matched → win message appears.  
5. Click **Restart** to play again instantly.

---

## 🚀 Getting Started

1. Clone or download the project:
   ```bash
   git clone https://github.com/Majesticats/Its-not-Mappening
   ```
2. Open `index.html` directly in your browser — no build tools required.

---

## 🎨 Customization

- Add or replace images in `assets/img/` (ensure unique names).  
- Update `/js/data.js` to include your custom images.  

---

## 📸 Preview

Dark minimalist interface — title, move/time stats, restart button, and a 4×4 grid of cards flipping smoothly against a matte background.

---

## 🧠 Future Improvements

- Animated win overlay  
- Audio feedback (flip, match, win sounds)  
- Persistent best-time tracking with `localStorage`

---

## 🪶 Author

**Nguyen Du**  
