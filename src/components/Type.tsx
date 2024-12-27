import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { FaCode } from "react-icons/fa6"
import { Checkbox } from "./ui/checkbox"
import { typeFilter } from "@/constants"

const Type = ({ types, onHandleTypeChange }: { types: string[], onHandleTypeChange: (t: string) => void }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="bg-white w-full sm:w-max rounded-[12px] h-[40px] sm:h-[50px] text-black font-semibold text-sm sm:text-md flex items-center gap-3">
                    <FaCode className="!size-5 text-black" />
                    <span className="-translate-y-0.5">Categories</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2">
                <span className="text-base font-semibold text-black">Select joke categories</span>
                <div className="grid grid-cols-2 gap-2">
                    {typeFilter.map((type) => (
                        <div key={type} className="flex items-center gap-2">
                            <Checkbox id={type} defaultChecked={types.includes(type)} onCheckedChange={() => onHandleTypeChange(type)} />
                            <label className="capitalize" htmlFor={type}>{type}</label>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Type
