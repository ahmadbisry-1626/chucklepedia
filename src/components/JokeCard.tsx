import { useJoke } from "@/lib/queries"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { JokeProps } from "@/type"
import { ScrollArea } from "./ui/scroll-area"
import { formatTime } from "@/lib/utils"
import { IoCheckmarkDone } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import Filter from "./Filter"
import { FaCode } from "react-icons/fa6";

const JokeCard = () => {
    const [blacklistFlags, setBlacklistFlags] = useState<string[]>([])
    const [fetchEnabled, setFetchEnabled] = useState<boolean>(false);
    const [currentJoke, setCurrentJoke] = useState<JokeProps | null>(null);
    const { isLoading, refetch } = useJoke(blacklistFlags, fetchEnabled)
    const [jokes, setJokes] = useState<JokeProps[]>([]);

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

    return (
        <div className="flex flex-col justify-center bg-black-mate w-full h-screen sm:h-[650px] overflow-hidden sm:max-w-xl items-center sm:rounded-[24px]">
            <ScrollArea className="w-full h-full flex flex-col px-6 sm:px-10">
                <div className="flex items-center flex-col w-full justify-center gap-3 pt-10">
                    <img src="/images/botak.jpg" alt="logo" width={80} height={80} sizes="100vw" className="rounded-full" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-center font-semibold text-lg text-white">@chucklepedia</h1>
                        <span className="text-gray-400 text-base">Lorem ipsum dolor sit amet consectetur</span>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-10 pb-10">
                    <div className="flex flex-col gap-1 w-max">
                        <div className="px-4 py-2 rounded-[12px] bg-black-gray">
                            <span className="text-white">What's so funny?</span>
                        </div>
                        <div className="w-full flex items-center justify-end gap-2">
                            <span className="text-gray-400 text-xs">{formatTime(new Date())}</span>
                            <IoCheckmarkDone className="size-4 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 max-w-max">
                        <div className="px-4 py-2 rounded-[12px] bg-black-gray flex flex-col gap-0.5">
                            <span className="text-white">Why don't skeletons fight each other?</span>
                            <span className="text-white">They don't have the guts!</span>
                        </div>
                        <div className="w-full flex items-center justify-end gap-2">
                            <span className="text-gray-400 text-xs">{formatTime(new Date())}</span>
                            <IoCheckmarkDone className="size-4 text-gray-400" />
                        </div>
                    </div>

                    {isLoading && (
                        <div className="flex items-center gap-1 mt-2">
                            <FaCircle className="size-2 text-white animate-bounce" />
                            <FaCircle className="size-2 text-white animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <FaCircle className="size-2 text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                    )}

                    {currentJoke && currentJoke.setup.length > 0 && (
                        jokes.map((j, index) => (
                            <div key={index} className="flex flex-col gap-1 max-w-max">
                                <div className="px-4 py-2 rounded-[12px] bg-black-gray flex flex-col gap-2">
                                    <span className="text-white">{j.setup}</span>
                                    <span className="text-white">{j.delivery}</span>
                                </div>
                                <div className="w-full flex items-center justify-end gap-2">
                                    <span className="text-gray-400 text-xs">
                                        {formatTime(new Date())}
                                    </span>
                                    <IoCheckmarkDone className="size-4 text-gray-400" />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </ScrollArea>
            <div className="py-4 w-full px-6 flex items-center gap-3 sm:bg-gray-100 relative max-sm:flex-col-reverse">
                <Button className="bg-white w-full rounded-[12px] h-[50px] text-black font-semibold text-sm sm:text-md" onClick={handleRefetch}>
                    Get a random Joke
                </Button>
                <div className="flex items-center gap-3 max-sm:w-full">
                    <Filter onHandleCheckChange={handleCheckbox} blacklistFlag={blacklistFlags}/>
                    <Button className="bg-white w-full sm:w-max rounded-[12px] h-[50px] text-black font-semibold text-sm sm:text-md flex items-center gap-2">
                        <FaCode className="!size-5 text-black" />
                        <span className="-translate-y-0.5">Type</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default JokeCard
