import { blacklistFlags } from "@/constants"
import { Checkbox } from "./ui/checkbox"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { FaFlag } from "react-icons/fa6"


const Filter = ({ blacklistFlag, onHandleCheckChange }: { blacklistFlag: string[], onHandleCheckChange: (flag: string) => void }) => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="bg-white w-full sm:w-max rounded-[12px] h-[40px] sm:h-[50px] text-black font-semibold text-sm sm:text-md flex items-center gap-3">
                    <FaFlag className="!size-4 text-black" />
                    <span className="-translate-y-0.5">Flags</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2">
                <span className="text-base font-semibold text-black">Select flags to blacklist</span>
                <div className="grid grid-cols-2 gap-1">
                    {blacklistFlags.map((flag) => (
                        <div key={flag} className="flex items-center gap-2">
                            <Checkbox id={flag} onCheckedChange={() => onHandleCheckChange(flag)} defaultChecked={blacklistFlag.includes(flag)}/>
                            <label className="capitalize" htmlFor={flag}>{flag}</label>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Filter
