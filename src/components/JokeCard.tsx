import { useJoke } from "@/lib/queries"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { JokeProps } from "@/type"
import { ScrollArea } from "./ui/scroll-area"
import { formatTime } from "@/lib/utils"
import { IoCheckmarkDone } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import Filter from "./Filter"
import Type from "./Type"
import Features from "./Features"
import { MdOutlineContentCopy } from "react-icons/md"
import { FaCheck } from "react-icons/fa6"
import { DummyJokes } from "@/constants"
import { motion } from 'framer-motion';

interface DummyJokeProps {
    setup: string;
    delivery: string;
    type: string;
}

const JokeCard = () => {
    const [blacklistFlags, setBlacklistFlags] = useState<string[]>([])
    const [emojis, setEmojis] = useState<{ [key: number]: number }>({});
    const [copied, setCopied] = useState<Record<string, boolean>>({})
    const [fetchEnabled, setFetchEnabled] = useState<boolean>(false);
    const [currentJoke, setCurrentJoke] = useState<JokeProps | null>(null);
    const [jokes, setJokes] = useState<JokeProps[]>([]);
    const [dummyJokes, setDummyJokes] = useState<DummyJokeProps>()
    const [types, setType] = useState<string[]>([
        'Programming',
        'Miscellaneous',
        'Dark',
        'Pun',
        'Spooky',
        'Christmas'
    ])
    const { isLoading, refetch } = useJoke(blacklistFlags, fetchEnabled, types)

    useEffect(() => {
        if (currentJoke && !jokes.some((j) => j.setup === currentJoke.setup)) {
            setJokes((prevJokes) => [...prevJokes, currentJoke]);
            setFetchEnabled(false);
        }
    }, [currentJoke]);

    const handleRefetch = async () => {
        setFetchEnabled(true);
        const result = await refetch();
        if (result.data) {
            setCurrentJoke(result.data);
        }
        setFetchEnabled(false);
    };

    const handleCheckbox = (flag: string) => {
        setBlacklistFlags((prevFlags) => {
            if (prevFlags.includes(flag)) {
                return prevFlags.filter((f) => f !== flag);
            } else {
                return [...prevFlags, flag];
            }
        });
    }

    const handleTypeChange = (type: string) => {
        setType((prevType) => {
            if (prevType.includes(type)) {
                return prevType.filter((t) => t !== type)
            } else {
                return [...prevType, type]
            }
        })
    }

    const handleEmoji = (jokeIndex: number, emojiId: number) => {
        setEmojis((prev) => {
            const currentEmoji = prev[jokeIndex];
            if (currentEmoji === emojiId) {
                return { ...prev, [jokeIndex]: 0 };
            } else {
                return { ...prev, [jokeIndex]: emojiId };
            }
        });
    };


    useEffect(() => {
        const randomJoke = DummyJokes[Math.floor(Math.random() * DummyJokes.length)]
        setDummyJokes(randomJoke)
    }, [])


    return (
        <div className="flex flex-col justify-center bg-black-mate w-full h-screen sm:h-[650px] overflow-hidden sm:max-w-xl items-center sm:rounded-[24px] sm:z-10">
            <ScrollArea className="w-full h-full flex flex-col px-6">
                <div className="flex items-center flex-col w-full justify-center gap-3 pt-10">
                    <img src="/chucklepedia.png" alt="logo" width={90} height={90} sizes="100vw" className="rounded-full" />
                    <div className="flex flex-col">
                        <a href="https://github.com/ahmadbisry-1626/chucklepedia" className="text-center font-semibold text-lg text-white hover:text-gray-300 transition-all duration-300" target="blank">@chucklepedia</a>
                        <span className="text-gray-400 text-sm sm:text-base text-center">Brightening your day, one joke at a time</span>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-10 pb-5">
                    <div className="flex flex-col gap-1 w-max">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: 'easeInOut',
                                    delay: 0.4
                                }

                            }}
                            viewport={{ once: true }}
                            className="px-4 py-2 rounded-[12px] bg-black-gray">
                            <span className="text-white">What's so funny?</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                    delay: 0.8
                                }

                            }}
                            viewport={{ once: true }}
                            className="w-full flex items-center justify-end gap-2">
                            <span className="text-gray-400 text-xs">{formatTime(new Date())}</span>
                            <IoCheckmarkDone className="size-4 text-gray-400" />
                        </motion.div>
                    </div>
                    <div className="flex flex-col gap-2 max-w-max">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: 'easeInOut',
                                    delay: 1.4
                                }

                            }}
                            viewport={{ once: true }}
                            className="px-4 py-2 rounded-[12px] bg-black-gray flex flex-col gap-2">
                            <span className="text-white">{dummyJokes?.setup}</span>
                            <span className="text-white">{dummyJokes?.delivery}</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                    delay: 1.8
                                }

                            }}
                            viewport={{ once: true }}
                            className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">{dummyJokes?.type}</span>
                            <div className="w-full flex items-center justify-end gap-2">
                                <span className="text-gray-400 text-xs">{formatTime(new Date())}</span>
                                <IoCheckmarkDone className="size-4 text-gray-400" />
                            </div>
                        </motion.div>
                    </div>

                    {currentJoke && currentJoke.setup.length > 0 && (
                        jokes.map((j) => (
                            <div key={j.id} className="flex flex-col gap-2 max-w-max">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            ease: 'easeInOut'
                                        }

                                    }}
                                    viewport={{ once: true }}
                                    className="px-4 py-2 rounded-[12px] bg-black-gray flex flex-col gap-2">
                                    <span className="text-white">{j.setup}</span>
                                    <span className="text-white">{j.delivery}</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5,
                                            ease: 'easeInOut',
                                            delay: 0.4
                                        }

                                    }}
                                    viewport={{ once: true }}
                                    className="w-full flex items-center justify-between">
                                    <div className="flex items-cemter gap-2">
                                        <Features
                                            onHandleEmoji={(emojiId) => handleEmoji(j.id, emojiId)}
                                            currentEmojiId={emojis[j.id] || 0}
                                        />


                                        <button
                                            disabled={copied[j.id]}
                                            onClick={async () => {
                                                await navigator.clipboard.writeText(j.setup + '\n' + j.delivery);
                                                setCopied((prev) => ({ ...prev, [j.id]: true }))
                                                setTimeout(() => setCopied((prev) => ({ ...prev, [j.id]: false })), 3000)
                                            }}>
                                            {copied[j.id] ? (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.6 }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                        transition: {
                                                            duration: 0.5,
                                                            ease: 'easeInOut',
                                                        }

                                                    }}
                                                >
                                                    <FaCheck className="!size-4 text-gray-400 transition-all duration-300" />
                                                </motion.div>
                                            ) : (
                                                <MdOutlineContentCopy className="!size-4 text-gray-400 hover:text-white transition-all duration-300" />
                                            )}
                                        </button>

                                        <span className="text-sm text-gray-400">{j.category}</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-400 text-xs">
                                            {formatTime(new Date())}
                                        </span>
                                        <IoCheckmarkDone className="size-4 text-gray-400" />
                                    </div>
                                </motion.div>
                            </div>
                        ))
                    )}

                    {isLoading && (
                        <div className="flex items-center gap-1 mt-2">
                            <FaCircle className="size-1.5 text-white animate-bounce" />
                            <FaCircle className="size-1.5 text-white animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <FaCircle className="size-1.5 text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                    )}
                </div>
            </ScrollArea>
            <div className="py-4 w-full px-6 flex items-center gap-3 relative max-sm:flex-col-reverse">
                <Button className="bg-white w-full rounded-[12px] h-[40px] sm:h-[50px] text-black font-semibold text-md" onClick={handleRefetch}>
                    Tickle Me!
                </Button>
                <div className="flex items-center gap-3 max-sm:w-full">
                    <Filter onHandleCheckChange={handleCheckbox} blacklistFlag={blacklistFlags} />
                    <Type types={types} onHandleTypeChange={handleTypeChange} />
                </div>
            </div>
        </div>
    )
}

export default JokeCard
