import Hero from "@/component/Hero";
import SkillCard from "@/component/SkillCard";
import AboutCard from "@/component/AboutCard";
import Hobi from "@/component/hobi";
import JadwalBelajar from "@/component/JadwalBelajar";
import Footer from "@/component/Footer";

const skills = [
  {nama: "HTML",level: "menegah"},
  {nama: "CSS",level: "menegah"},
  {nama: "GIT dan github",level: "dasar"},
  {nama: "desain pakai cannva",level: "expert"},
  {nama: "JavaScript",level: "menegah"},
  
];

export default function home() {


  return (
    <div>
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      Nama = "Goldie Gladwin "
      tagline="Siswa xi SMK, calon junior web developer di kelas industri ubig"
      />
      <div className="gap-5">
      <section className="mt-10 space-y-6">
        
        <AboutCard/>
        
        <Hobi/>
        
        
        <div className="w-full bg-white gap-5 space-y-5 grid p-6">
        <h2 className="mb-4 text-2xl font-bold text-utama gap-5">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3 ">
          
        {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
        ))}
        </div>
        </div>
        <JadwalBelajar/>
        
      </section>
      
      </div>
      
    </main>
        <Footer/>
    </div>
    
  );
}