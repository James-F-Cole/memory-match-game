# Memory Match Game

## Project Overview

This project is a browser-based Memory Match Game developed using **HTML5, CSS3, and JavaScript**. The objective is to match pairs of cards in the fewest moves and shortest time possible. The game includes multiple difficulty levels, score tracking, a timer, and a leaderboard that stores the best scores locally in the browser.

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
* `css/` – Stylesheets for layout and responsiveness
* `js/` – Modular JavaScript files for game logic, UI, scoring, timer, storage, and statistics
* `assets/` – Images and audio resources

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Launch `index.html` in any modern web browser.
4. Enter a player name, choose a difficulty, and start playing.

## Challenges and Solutions

### 1. Responsive Layout

**Challenge:** Larger game boards, especially the Hard difficulty, exceeded the screen height on smaller devices.

**Solution:** The layout was redesigned using responsive CSS Grid and Flexbox techniques. Card sizes and board dimensions adjust based on the screen size to keep the game playable across different devices.

### 2. Organizing JavaScript Code

**Challenge:** As new features were added, the main JavaScript file became difficult to maintain.

**Solution:** The code was refactored into separate modules responsible for the game board, timer, scoring, statistics, storage, UI updates, and configuration, making the project easier to read and extend.

### 3. Saving Player Progress

**Challenge:** Best scores and leaderboard data were lost whenever the page was refreshed.

**Solution:** Browser Local Storage was used to save high scores and leaderboard entries so they persist between game sessions.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser Local Storage

## Credits

* Card shuffle implemented using the Fisher–Yates Shuffle algorithm.
* Icons and emojis used are standard Unicode characters.
* All game logic, interface design, and implementation were developed for this project.

##Author
**James F. Cole**
