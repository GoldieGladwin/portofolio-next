import Image from "next/image";
import image from "next/image";

export default function Hero ({Nama, tagline}) {
    return (
        <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <Image
            src="/profile.jpg"
            alt={`Foto Profile ${Nama}`}
            width={180}
            height={180}
            loading="eager"
            className="h-[180px] w-[180px] rounded-full border-4 border-aksen object-cover"/>
            <div>
            <h1 className="text-3xl font-bold text-utama md:text-5xl">halo nama saya {Nama}!</h1>
            <p className="mt-3 text-lg text-gray-700">{tagline}</p>
            </div>
        </section>
    );
}