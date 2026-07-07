# Software Architecture

## Overview

The Memory Match Game uses a modular JavaScript architecture.

The application is divided into separate systems, where each file has a specific responsibility.

This improves maintainability, readability, and future expansion.

---

## Architecture Design

The application follows a separation of concerns approach.

Each module manages one part of the application.

---

## Module Responsibilities

### config.js

Stores configuration values such as:

- Available card values
- Game settings
- Default options

---

### state.js

Maintains current game information:

- Selected cards
- Number of moves
- Matched pairs
- Game status

---

### board.js

Responsible for:

- Creating cards
- Shuffling cards
- Generating the game board

---

### timer.js

Responsible for:

- Starting the timer
- Tracking elapsed time
- Updating time values

---

### audio.js

Responsible for:

- Playing sound effects
- Managing audio behavior

---

### ui.js

Responsible for updating the interface:

- Move counter
- Timer display
- Messages
- Visual changes

---

### main.js

Acts as the application coordinator.

It manages:

- User interaction
- Card matching logic
- Game flow
- Initialization

---

## Application Flow

When the application starts:

1. `main.js` calls initialization.
2. `board.js` creates the card board.
3. The player interacts with cards.
4. `main.js` processes game rules.
5. `state.js` stores current progress.
6. `ui.js` updates the display.
7. `timer.js` manages time tracking.

---

## Future Architecture Improvements

Possible future improvements:

- Convert files into JavaScript modules
- Create a dedicated game engine file
- Add configuration-based board generation
- Introduce automated testing