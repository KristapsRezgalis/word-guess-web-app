[README.md](https://github.com/user-attachments/files/25687152/README.md)
# LINGO 2025

A browser-based word-guessing game built with vanilla HTML, CSS, and JavaScript. Supports both Latvian and English word lists, in-session leaderboards, and a lives system.

---

## Gameplay

The player has five attempts to guess a hidden 5-letter word. After each guess, tiles are color-coded to indicate letter accuracy:

| Color  | Meaning                                      |
|--------|----------------------------------------------|
| Green  | Correct letter, correct position             |
| Yellow | Correct letter, wrong position               |
| Red    | Letter not present in the word               |

- The player starts with **3 lives**
- Failing to guess a word costs one life
- Guessing correctly on the **first attempt** awards a bonus life (up to a maximum of 5)
- When all lives are lost, the final score can be saved to the leaderboard

---

## Features

- **Two language modes** — Latvian and English word lists selectable from the menu
- **Keyboard input** — letter entry, Backspace to delete, Enter to submit
- **Score tracking** — score increments on each correct guess
- **In-session leaderboard** — separate high score tables for LV and ENG, sorted by score
- **End-game modal** — prompts the player to enter a name before saving the result
- **No dependencies** — runs entirely in the browser with no build step or external libraries

---

## Project Structure

```
/
├── index.html       # Game layout and modals
├── styles.css       # Styling
├── script.js        # Game logic
├── favicon.ico
└── images/
    ├── logo1.png    # Navigation logo
    ├── logo2.jpg
    └── heart.png    # Lives indicator
```

---

## Getting Started

No installation or build process required. Open `index.html` directly in a browser.

---

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No polyfills required.

---

## Room for future improvements

- Scores and leaderboard data are stored **in memory only** — they reset on page refresh
- Mobile on-screen keyboard — input relies on a physical keyboard
