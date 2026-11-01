import Hero from "@/component/Hero";
import SkillCard from "@/component/SkillCard";

import Footer from "@/component/Footer";
import ProyekCard from "@/component/ProyekCard";
import { proyek } from "@/data/proyek";
import Link from "next/link";


export default function home() {
   
  const skills = [
  {nama: "HTML",level: "menegah"},
  {nama: "CSS",level: "menegah"},
  {nama: "GIT dan github",level: "dasar"},
  {nama: "desain pakai cannva",level: "expert"},
  {nama: "JavaScript",level: "menegah"},
  ]


  return (
    <div>
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      Nama = "Goldie Gladwin "
      tagline="Siswa xi SMK, calon junior web developer di kelas industri ubig"
      />
      <div className="gap-5">
      <section className="mt-10 space-y-6">
        
        
        <div className="w-full bg-white gap-5 space-y-5 grid p-6 rounded-xl">
        <h2 className="mb-4 text-2xl font-bold text-utama gap-5">Keahlian</h2>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
        ))}
        </div>
        </div>
        
        <div className="w-full bg-white gap-5 space-y-5 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-utama">Proyek Terbaru</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {proyek.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
      </div>

      
        <Link 
        href={"/proyek"}
        className="bg-utama rounded-lg text-white inline-block px-4 py-2 font-semibold shadow-sm hover:opacity-90 transition">Lihat semua proyek</Link>
      
        
      </section>
      
      </div>
      
    </main>
        
    </div>
    
  );
}