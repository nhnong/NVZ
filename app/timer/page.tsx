import Timer from "@/pomodoro-timer/src/app/_components/timer/timer"
export default function TimerPage(){
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/pomodoro-screen.png')" }}>
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md">
            <Timer />
        </div>
        </main>
    )
}