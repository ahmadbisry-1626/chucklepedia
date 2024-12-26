import JokeCard from "./components/JokeCard"

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-2xl font-semibold">Nataru</h1>
                <JokeCard />
            </div>
        </div>
    )
}

export default App
