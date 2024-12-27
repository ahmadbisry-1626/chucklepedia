import { FaLaughSquint, FaSadCry } from "react-icons/fa"
import { BsEmojiAngryFill } from "react-icons/bs";
import { ImShocked2 } from "react-icons/im";

export const blacklistFlags = [
    "nsfw",
    "religious",
    "political",
    "racist",
    "sexist",
    "explicit"
]

export const typeFilter = [
    'Programming',
    'Miscellaneous',
    'Dark',
    'Pun',
    'Spooky',
    'Christmas'
]

export const Emoji = [
    {
        id: 1,
        name: "laugh",
        icon: FaLaughSquint,
    },
    {
        id: 2,
        name: "cry",
        icon: FaSadCry,
    },
    {
        id: 3,
        name: "angry",
        icon: BsEmojiAngryFill,
    },
    {
        id: 4,
        name: "shocked",
        icon: ImShocked2,
    },
]

export const DummyJokes = [
    {
        setup: 'Why do programmers prefer dark mode?',
        delivery: 'Because light attracts bugs.',
        type: 'Programming',
    },
    {
        setup: 'How do you comfort a JavaScript bug?',
        delivery: 'You console it.',
        type: 'Programming',
    },
    {
        setup: 'Why do programmers hate nature?',
        delivery: 'Too many bugs.',
        type: 'Programming',
    },
    {
        setup: 'Why was the computer cold?',
        delivery: 'It left its Windows open.',
        type: 'Programming',
    },
    {
        setup: 'Why did the developer go broke?',
        delivery: 'Because he used up all his cache.',
        type: 'Programming',
    },
    {
        setup: 'Why did the programmer quit his job?',
        delivery: 'He didn’t get arrays.',
        type: 'Programming',
    },
    {
        setup: 'Why do Python programmers prefer snakes?',
        delivery: 'Because they\'re constrictors, not a pain!',
        type: 'Programming',
    },
    {
        setup: 'How does a coder fix a broken chair?',
        delivery: 'With a patch.',
        type: 'Programming',
    },
    {
        setup: 'Why did the programmer bring a ladder to work?',
        delivery: 'To reach new heights in the stack.',
        type: 'Programming',
    },
    {
        setup: 'What’s a programmer’s favorite music genre?',
        delivery: 'Algorithms and Blues.',
        type: 'Programming',
    },
    {
        setup: 'Why did the scarecrow win an award?',
        delivery: 'He was outstanding in his field!',
        type: 'Miscellaneous',
    },
    {
        setup: 'Why don’t eggs tell jokes?',
        delivery: 'They’d crack each other up.',
        type: 'Miscellaneous',
    },
    {
        setup: 'Why couldn’t the bicycle stand up by itself?',
        delivery: 'It was two-tired!',
        type: 'Miscellaneous',
    },
    {
        setup: 'What do you call fake spaghetti?',
        delivery: 'An impasta!',
        type: 'Miscellaneous',
    },
    {
        setup: 'Why did the golfer bring two pairs of pants?',
        delivery: 'In case he got a hole in one.',
        type: 'Miscellaneous',
    },
    {
        setup: 'What do you call a bear with no teeth?',
        delivery: 'A gummy bear.',
        type: 'Miscellaneous',
    },
    {
        setup: 'Why was the math book sad?',
        delivery: 'It had too many problems.',
        type: 'Miscellaneous',
    },
    {
        setup: 'Why can’t you give Elsa a balloon?',
        delivery: 'Because she’ll let it go!',
        type: 'Miscellaneous',
    },
    {
        setup: 'What do you call cheese that isn’t yours?',
        delivery: 'Nacho cheese.',
        type: 'Miscellaneous',
    },
    {
        setup: 'Why don’t skeletons use smartphones?',
        delivery: 'They just can’t handle touch screens.',
        type: 'Miscellaneous',
    },
    {
        setup: 'Why don’t graveyards ever get overcrowded?',
        delivery: 'People are dying to get in.',
        type: 'Dark',
    },
    {
        setup: 'Why did the skeleton refuse to go to the party?',
        delivery: 'He didn’t have the guts.',
        type: 'Dark',
    },
    {
        setup: 'What’s the best thing about living in Switzerland?',
        delivery: 'I don’t know, but the flag is a big plus.',
        type: 'Dark',
    },
    {
        setup: 'Why was the belt arrested?',
        delivery: 'For holding up a pair of pants!',
        type: 'Dark',
    },
    {
        setup: 'Why do vampires always seem tired?',
        delivery: 'Because they’re drained all the time.',
        type: 'Dark',
    },
    {
        setup: 'Why did the coffin break up with the grave?',
        delivery: 'It needed space.',
        type: 'Dark',
    },
    {
        setup: 'What do you call a magician who loses his magic?',
        delivery: 'Ian.',
        type: 'Dark',
    },
    {
        setup: 'Why did the headstone feel insulted?',
        delivery: 'It felt like it was taken for granite.',
        type: 'Dark',
    },
    {
        setup: 'Why do ghosts never lie?',
        delivery: 'Because you can see right through them.',
        type: 'Dark',
    },
    {
        setup: 'What’s a vampire’s least favorite meal?',
        delivery: 'Stake.',
        type: 'Dark',
    },
    {
        setup: 'Why are fish so smart?',
        delivery: 'They live in schools.',
        type: 'Pun',
    },
    {
        setup: 'Why did the tomato turn red?',
        delivery: 'Because it saw the salad dressing!',
        type: 'Pun',
    },
    {
        setup: 'Why don’t crabs ever give to charity?',
        delivery: 'They’re a little shellfish.',
        type: 'Pun',
    },
    {
        setup: 'Why did the orange stop halfway up the hill?',
        delivery: 'It ran out of juice.',
        type: 'Pun',
    },
    {
        setup: 'What’s orange and sounds like a parrot?',
        delivery: 'A carrot.',
        type: 'Pun',
    },
    {
        setup: 'Why did the bicycle fall over?',
        delivery: 'Because it was two-tired.',
        type: 'Pun',
    },
    {
        setup: 'What do you call an alligator in a vest?',
        delivery: 'An investigator.',
        type: 'Pun',
    },
    {
        setup: 'Why was the baby strawberry sad?',
        delivery: 'Because its parents were in a jam.',
        type: 'Pun',
    },
    {
        setup: 'Why can’t you trust an atom?',
        delivery: 'They make up everything!',
        type: 'Pun',
    },
    {
        setup: 'What do you call a dinosaur with an extensive vocabulary?',
        delivery: 'A thesaurus.',
        type: 'Pun',
    },
    {
        setup: 'Why did the ghost go to the party?',
        delivery: 'For the boos!',
        type: 'Spooky',
    },
    {
        setup: 'What’s a witch’s favorite subject in school?',
        delivery: 'Spelling.',
        type: 'Spooky',
    },
    {
        setup: 'Why don’t mummies take vacations?',
        delivery: 'They’re afraid they’ll unwind.',
        type: 'Spooky',
    },
    {
        setup: 'What do skeletons say before they begin dining?',
        delivery: 'Bone appétit!',
        type: 'Spooky',
    },
    {
        setup: 'What’s a vampire’s favorite fruit?',
        delivery: 'A blood orange.',
        type: 'Spooky',
    },
    {
        setup: 'Why did the ghost break up with the ghoul?',
        delivery: 'He felt she was too possessive.',
        type: 'Spooky',
    },
    {
        setup: 'How do you make a skeleton laugh?',
        delivery: 'Tickle its funny bone!',
        type: 'Spooky',
    },
    {
        setup: 'Why are ghosts bad liars?',
        delivery: 'You can see right through them.',
        type: 'Spooky',
    },
    {
        setup: 'What’s a monster’s favorite dessert?',
        delivery: 'I scream!',
        type: 'Spooky',
    },
    {
        setup: 'Why don’t werewolves ever tell secrets?',
        delivery: 'Because they always howl it out.',
        type: 'Spooky',
    },
]
