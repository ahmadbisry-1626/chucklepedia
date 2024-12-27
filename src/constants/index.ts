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
