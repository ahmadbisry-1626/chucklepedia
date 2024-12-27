import { MdOutlineAddReaction } from 'react-icons/md'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Emoji } from '@/constants'


const Features = ({ onHandleEmoji, currentEmojiId }: { onHandleEmoji: (id: number) => void, currentEmojiId: number }) => {
    const newEmoji = Emoji.find((emot) => emot.id === currentEmojiId)

    return (
        <Popover>
            <PopoverTrigger>
                {currentEmojiId > 0 && newEmoji ? (
                    <newEmoji.icon className="!size-4 text-yellow-400 hover:scale-110 transition-all duration-300" />
                ) : (
                    <MdOutlineAddReaction className="!size-4 text-gray-400 hover:text-white transition-all duration-300" />
                )}
            </PopoverTrigger>
            <PopoverContent className='flex items-center gap-3 w-max !bg-black-gray border-none'>
                {Emoji.map((emot, i) => {
                    const active = currentEmojiId === emot.id

                    return (
                        <emot.icon
                            key={i}
                            className={`${active ? 'text-yellow-400' : 'text-white'} !size-5 cursor-pointer hover:scale-110 transition-all duration-300`}
                            onClick={() => {
                                onHandleEmoji(emot.id)
                            }} />
                    )
                })}
            </PopoverContent>
        </Popover>
    )
}

export default Features