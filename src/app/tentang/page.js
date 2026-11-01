import AboutCard from "@/component/AboutCard"
import Hobi from "@/component/hobi"
import JadwalBelajar from "@/component/JadwalBelajar"

export default function Tentang () {
    return (
        <main className="mx-auto max-w-5xl px-4 py-19">
            <h1 className="Font-bold justify-between"></h1>
            <div className="gap-6 space-y-5">
            <AboutCard/>
            <Hobi/>
            <JadwalBelajar/>
            </div>
        </main>
    )
}