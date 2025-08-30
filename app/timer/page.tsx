import Timer from "@/src/components/timer/timer"

export default function TimerPage(){
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/pomodoro-screen.png')" }}>
        <div className=" p-6 shadow-lg w-96 max-w-md">
            <Timer />
        </div>
        </main>
    )
}