import React, { useEffect, useState } from 'react'
import Character from './Character';
import Message from './Message';

const Hangman = () => {

    //Array items to play the game
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const animalList = [
        "Aardvark",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant",
        "Coyote",
        "Crab",
        "Crane",
        "Crocodile",
        "Crow",
        "Curlew",
        "Deer",
        "Dinosaur",
        "Dog",
        "Dogfish",
        "Dolphin",
        "Dotterel",
        "Dove",
        "Dragonfly",
        "Duck",
        "Dugong",
        "Dunlin",
        "Eagle",
        "Echidna",
        "Eel",
        "Eland",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Finch",
        "Fish",
        "Flamingo",
        "Fly",
        "Fox",
        "Frog",
        "Gaur",
        "Gazelle",
        "Gerbil",
        "Giraffe",
        "Gnat",
        "Gnu",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Goshawk",
        "Grasshopper",
        "Grouse",
        "Guanaco",
        "Gull",
        "Hamster",
        "Hare",
        "Hawk",
        "Hedgehog",
        "Heron",
        "Herring",
        "Hippopotamus",
        "Hornet",
        "Horse",
        "Human",
        "Hummingbird",
        "Hyena",
        "Ibex",
        "Ibis",
        "Jackal",
        "Jaguar",
        "Jay",
        "Jellyfish",
        "Kangaroo",
        "Kingfisher",
        "Koala",
        "Kookabura",
        "Kouprey",
        "Kudu",
        "Lapwing",
        "Lark",
        "Lemur",
        "Leopard",
        "Lion",
        "Llama",
        "Lobster",
        "Locust",
        "Loris",
        "Louse",
        "Lyrebird",
        "Magpie",
        "Mallard",
        "Manatee",
        "Mandrill",
        "Mantis",
        "Marten",
        "Meerkat",
        "Mink",
        "Mole",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mosquito",
        "Mouse",
        "Mule",
        "Narwhal",
        "Newt",
        "Nightingale",
        "Octopus",
        "Okapi",
        "Opossum",
        "Oryx",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panther",
        "Parrot",
        "Partridge",
        "Peafowl",
        "Pelican",
        "Penguin",
        "Pheasant",
        "Pig",
        "Pigeon",
        "Pony",
        "Porcupine",
        "Porpoise",
        "Quail",
        "Quelea",
        "Quetzal",
        "Rabbit",
        "Raccoon",
        "Rail",
        "Ram",
        "Rat",
        "Raven",
        "Red deer",
        "Red panda",
        "Reindeer",
        "Rhinoceros",
        "Rook",
        "Salamander",
        "Salmon",
        "Sand Dollar",
        "Sandpiper",
        "Sardine",
        "Scorpion",
        "Seahorse",
        "Seal",
        "Shark",
        "Sheep",
        "Shrew",
        "Skunk",
        "Snail",
        "Snake",
        "Sparrow",
        "Spider",
        "Spoonbill",
        "Squid",
        "Squirrel",
        "Starling",
        "Stingray",
        "Stinkbug",
        "Stork",
        "Swallow",
        "Swan",
        "Tapir",
        "Tarsier",
        "Termite",
        "Tiger",
        "Toad",
        "Trout",
        "Turkey",
        "Turtle",
        "Viper",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Wasp",
        "Weasel",
        "Whale",
        "Wildcat",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Woodcock",
        "Woodpecker",
        "Worm",
        "Wren",
        "Yak",
        "Zebra"
    ]

    // Defining a state for the words, correct or wrong letter and to display the result

    const [gameWords, setGameWords] = useState('');
    const [correctLetter, setCorrectLetter] = useState([]);
    const [wrongLetter, setWrongLetter] = useState([]);
    const [result, setResult] = useState('');

    // Function to randomize the animal words
    const randomAnimals = () => {
        setGameWords(animalList[Math.floor(Math.random() * animalList.length)].toUpperCase())
    }

    const resetGame = () => {
        randomAnimals();
        setCorrectLetter([]);
        setWrongLetter([]);
        setResult('');
    }

    // Function to check for the letters that are clicked matching with the animalList word
    const guessLetter = letter => {
        //if the letter matches in the word
        if (gameWords.includes(letter))
            setCorrectLetter([...correctLetter, letter])
        else
            setWrongLetter([...wrongLetter, letter])
    }

    // Checking if all the correct Letters have been guessed then user wins
    useEffect(() => {
        if (correctLetter.length && gameWords.split('').every(letter => correctLetter.includes(letter))) {
            setResult('Won the game!')
        }
    }, [correctLetter]);

    // Checking if 10 wrong Letters have been guessed then user loses
    useEffect(() => {
        if (wrongLetter.length === 10) {
            setResult('Lost the game 😖 Better luck next time')
        }
    }, [wrongLetter]);

    useEffect(resetGame, [])

    // Hiding the words from the user

    const hideGameWord =
        gameWords
            .split('')
            .map(letter => correctLetter.includes(letter) ? letter : '_')
            .join('');

    // Rendering the letters in from the array in a form of buttons
    return (
        <>
            <div className="title">Hangman Game</div>
            <p className="hide">{hideGameWord}</p>
            <div>
                {letters
                    .map((letter, index) =>
                        <button disabled={correctLetter.includes(letter) || wrongLetter.includes(letter)}
                            onClick={() => guessLetter(letter)}
                            key={index}>{letter}</button>)
                }
            </div>

            {/* Printing the final result message */}

            <Message result={result} gameWords={gameWords} resetGame={resetGame} />

            {/* Calling the svg part component */}

            <Character wrongLetter={wrongLetter.length} />
        </>
    )
}

export default Hangman;