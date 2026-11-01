"use client";
import Link from "next/link";
import { proyek } from "@/data/proyek";
import { usePathname } from "next/navigation";


const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];



export default function Navbar() {
const pathname = usePathname ();
  

  return (
    <header className="sticky top-0 z-50 bg-utama text-white shadow-md">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide transition-opacity hover:opacity-90"
        >
          Goldie Gladwin
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                {menu.map ((item) => {
                  let kelas ="text-gray-200 hover:text-white";
                  if (pathname === item.href) {
                    kelas = "font-bold text-white underline underline-offset-8";
                  }
                  return (
            <li key={item.href}>
              <Link href={item.href} className={kelas}>
              {item.label}
              </Link>
            </li>
          )
  })}
        </ul>
      </nav>
    </header>
  );
}

