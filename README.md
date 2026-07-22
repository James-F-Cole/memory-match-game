# Memory Match Game

## Project Overview

This project is a browser-based **Memory Match Game** developed using **HTML5, CSS3, and JavaScript**. The objective is to match pairs of cards in the fewest moves and shortest time possible. The game includes multiple difficulty levels, score tracking, a timer, and a leaderboard system that stores player results locally in the browser.

## Live Demo

The game can be played directly in a web browser using the following link:

**https://james-f-cole.github.io/memory-match-game/**

## Features

* Three difficulty levels (Easy, Medium, Hard)
* Responsive game board using CSS Grid and Flexbox
* Timer and move counter
* Score calculation based on player performance
* Restart game functionality
* Local leaderboard and best score history using Local Storage
* Card flip animations and match feedback
* Game over screen displaying final statistics

## Project Structure

* `index.html` – Main application page
* `css/` – Stylesheets for layout, animations, and responsiveness
* `js/` – Modular JavaScript files for game logic, UI, scoring, timer, storage, and statistics
* `assets/` – Images and other game resources

## How to Run Locally

1. Download or clone the project repository.
2. Open the project folder.
3. Launch `index.html` in any modern web browser.
4. Enter a player name, select a difficulty level, and start playing.

## Challenges and Solutions

### 1. Responsive Layout

**Challenge:** Larger game boards, especially the Hard difficulty mode, created layout issues on smaller screens.

**Solution:** The interface was redesigned using responsive CSS Grid and Flexbox. Board sizes and card layouts adjust according to the selected difficulty and screen size.

### 2. Organizing JavaScript Code

**Challenge:** As more features were added, managing all game logic in one JavaScript file became difficult.

**Solution:** The code was separated into multiple modules responsible for specific tasks, including board generation, timer management, scoring, user interface updates, statistics, configuration, and storage.

### 3. Saving Player Scores

**Challenge:** Player scores and leaderboard information were lost after refreshing or closing the browser.

**Solution:** Browser Local Storage was implemented to save player names, scores, and game statistics, allowing information to persist between sessions.

### 4. Managing Game State

**Challenge:** Tracking card selections, matches, moves, and game progress became complex as new features were introduced.

**Solution:** A centralized game state system was created to manage important values such as current difficulty, moves, timer status, and player statistics.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser Local Storage

## Future Enhancements

Although the current version provides a complete and playable Memory Match experience, several improvements could be added in future versions:

* **Two-player mode** – Allow two users to compete against each other with turn-based gameplay.
* **Custom board sizes** – Support different grid layouts such as 4×4, 5×5, and 6×6 boards.
* **Dark mode and theme customization** – Allow users to personalize the appearance of the game.
* **Advanced scoring system** – Include additional factors such as accuracy, completion time, and move efficiency.
* **Sound effects and background music** – Add audio feedback for gameplay actions.
* **Player profiles and statistics** – Track long-term player performance and achievements.
* **Online leaderboard** – Store scores in a database and allow global score comparisons.
* **Progressive Web App (PWA) support** – Allow installation and offline gameplay.

## Credits

* Card shuffling implemented using the **Fisher–Yates Shuffle algorithm**.
* Icons and emojis used are standard Unicode characters.
* All game logic, interface design, and implementation were developed specifically for this project.


##Author##
**James F. Cole**
