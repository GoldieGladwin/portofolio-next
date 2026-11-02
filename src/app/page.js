import Hero from "@/component/Hero";
import SkillCard from "@/component/SkillCard";
import ProyekCard from "@/component/ProyekCard";
import { proyek } from "@/data/proyek";
import Link from "next/link";

export default function Home() {
  const skills = [
    { nama: "HTML", level: "menengah" },
    { nama: "CSS", level: "menengah" },
    { nama: "GIT dan github", level: "dasar" },
    { nama: "desain pakai canva", level: "expert" },
    { nama: "JavaScript", level: "menengah" },
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Hero
        Nama="Goldie Gladwin"
        tagline="Siswa XI SMK, calon junior web developer di kelas industri UBIG"
      />
      <div className="mt-10 space-y-8">
        <section className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
            Keahlian
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </section>

        <section className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
            Proyek Terbaru
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {proyek.slice(0, 3).map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/proyek"
              className="inline-block rounded-lg bg-utama px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Lihat semua proyek &rarr;
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
