import {proyek} from "@/data/proyek"
import ProyekCard from "@/component/ProyekCard"

export default function Tentang () {
    return (
        <main className="mx-auto max-w-5xl px-4 py-19">
            <h1 className="text-3xl text-utama font-bold md:text-4xl">
                proyek saya
                 <p className="mt-3 text-lg text-gray-700"> kumpulan hasil belajar saya di kelas industri UBIG. KLik kartu untuk melihat detailnya </p>
                 <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {proyek.map((item) => (
                        <ProyekCard key={item.slug} proyek={item}/>
                    ))}
                 </div>
            </h1>
        </main>
    )
}