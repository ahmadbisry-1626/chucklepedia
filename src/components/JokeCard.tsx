import { useJoke } from "@/lib/queries"
import { Button } from "./ui/button"


const JokeCard = () => {
    const { data: joke, isLoading, refetch } = useJoke()

    const handleRefetch = async () => {
        await refetch()
    }

    return (
        <div className="flex flex-col gap-3">
            <Button onClick={handleRefetch}>Get Random Joke</Button>
            {isLoading && (
                <span>Loading...</span>
            )}
            <div className="flex flex-col gap-3 max-w-xl">
                <span className="normal-case">{joke?.setup}</span>
                <span className="normal-case">{joke?.delivery}</span>
                <span>{joke?.category}</span>
            </div>
        </div>
    )
}

export default JokeCard
