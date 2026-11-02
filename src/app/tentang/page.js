import AboutCard from "@/component/AboutCard";
import Hobi from "@/component/hobi";
import JadwalBelajar from "@/component/JadwalBelajar";

export const metadata = {
  title: "Tentang",
  description: "Tentang Goldie Gladwin, hobi, cita-cita, dan jadwal belajar.",
};

export default function Tentang() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
        Tentang Saya
      </h1>
      <div className="space-y-6">
        <AboutCard />
        <Hobi />
        <JadwalBelajar />
      </div>
    </main>
  );
}
