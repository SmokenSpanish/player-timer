# ⏱️ Player Timer

A sleek and customizable timer app for turn-based games. Perfect for tracking time and moves per player in casual or competitive matches. Designed for mobile-first experience and inspired by chess clocks, but flexible for various activities.

## 🚀 Features

* 🕹️ Two timer modes:

  * **Stopwatch** — count up from zero.
  * **Timer** — countdown from a fixed start time.
* 👆 Tap the screen to switch turns.
* 🧍 Tap a player during pause to manually assign the active player.
* ⌛ Bonus time: Optionally add extra seconds after each turn (increment).
* 🔄 Reset time and moves per player.
* 🎨 Customize:

  * Player names
  * Player colors
  * Global background color
* 🖼️ Add a background photo from mobile device (optional).
* ➕ Add up to 6 players.
* 📱 Fully responsive and optimized for mobile usage.
* 🕶️ Visual effects: glowing timers, active state highlighting, smooth transitions.

## 🛠️ Technologies Used

* **React** (Vite)
* **TypeScript**
* **HTML5 / CSS3**
* **PWA-ready**

## 🎮 Usage Instructions

1. **Start Screen**

   * Choose between **Stopwatch** or **Timer** mode.
   * In Timer mode, set the starting time and optional bonus time per turn.

2. **During Game**

   * Tap anywhere to switch turn (Play mode).
   * Tap a player's card (Pause mode) to change active player.
   * Adjust time with the D-pad during pause.
   * Reset a player’s time and moves with the reset button.

3. **Pause / Resume**

   * Toggle pause to freeze time or make changes.

## 🌐 Live Demo

Try it now: [https://smokenspanish.github.io/player-timer/](https://smokenspanish.github.io/player-timer/)

## 📦 Build for Production

```bash
npm run build
```

The built app will be available in the `/dist` folder.

## 🧪 Testing on iPhone and macOS

Although the app is designed mobile-first, if you don't have access to Apple devices:

* Use Chrome or Safari's mobile device emulation (`DevTools > Toggle device toolbar`)
* Test PWA install behavior using "Add to Home Screen" in mobile browser
* Preview on Mac via online emulators (e.g. BrowserStack, Responsively App)

## 🙌 Contributing

Contributions are welcome! If you have ideas for improvements, feel free to open an issue or submit a pull request.

## 📄 License

MIT License — free for personal and commercial use.

---

© 2025 \[Basov Maksim]
