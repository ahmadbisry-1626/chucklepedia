import JokeCard from "./components/JokeCard"
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision"

function App() {
    return (
        <BackgroundBeamsWithCollision className="flex items-center justify-center min-h-screen">
            <JokeCard />
        </BackgroundBeamsWithCollision>
    )
}

export default App
