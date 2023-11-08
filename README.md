# Hangman Game

Welcome to the Hangman Game! This React application lets you play the classic word-guessing game with a twist—guess the names of animals. Can you save the poor character from being hanged?

# Instructions
Clone this repository.
Install dependencies using npm install.
Run the app with npm start.
Start guessing letters and have fun!

## How to Play
- The game will randomly select an animal name, and your goal is to guess the letters in that word.
- Click on the alphabet buttons to make your guesses.
- If the letter is in the word, it will be revealed; otherwise, your incorrect guesses will accumulate.
- You win if you correctly guess all the letters before making 10 wrong guesses.

## Animal Word List
I've compiled a list of diverse animals for you to guess. From Aardvark to Zebra, the challenge awaits!

## Game Interface
- The hidden word is displayed with underscores representing the letters.
- The available alphabet buttons are presented for you to make your guesses.

## Final Result
- If you correctly guess all the letters, you win the game!
- If you make 10 wrong guesses, unfortunately, you lose. Better luck next time!

## Components
### Hangman Component
- `randomAnimals`: Function to randomize the selection of animal names.
- `resetGame`: Function to reset the game state.
- `guessLetter`: Function to handle letter guesses.
- `useEffect`: Check for game win or loss conditions.
- `hideGameWord`: Hide the word, revealing guessed letters.
- Letter buttons for user input.
- Display the hangman character component.
- Display the result message component.

### Character Component
- SVG component renders the hanging character based on the number of incorrect guesses.

### Message Component
- Displays the final result message, prompting you to play again.

## Dependencies

- React
- JavaScript
- CSS (for styling)

## Acknowledgments
This Hangman Game is created by vismay12195. Feel free to contribute, report issues, or suggest improvements!

Enjoy playing Hangman and have fun guessing those animal names! 🦓🐘🦒