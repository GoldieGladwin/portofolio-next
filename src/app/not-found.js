import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-utama dark:text-sky-200">
        Error 404
      </span>
      <h1 className="mt-4 text-7xl font-extrabold tracking-tight text-utama dark:text-sky-200 md:text-9xl">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold text-utama dark:text-sky-200 md:text-3xl">
        Halaman Tidak Ditemukan
      </h2>
      <p className="mx-auto mt-3 max-w-md text-base text-gray-600 dark:text-gray-400 md:text-lg">
        Maaf, halaman yang kamu tuju tidak ada, sudah dihapus, atau tautan yang kamu masukkan salah.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-utama px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-900 hover:shadow"
        >
          &larr; Kembali ke Beranda
        </Link>
        <Link
          href="/proyek"
          className="rounded-xl border border-utama dark:border-sky-200 px-6 py-3 text-sm font-semibold text-utama dark:text-sky-200 transition-all hover:bg-blue-50 dark:hover:bg-gray-800"
        >
          Lihat Daftar Proyek
        </Link>
      </div>
    </main>
  );
}
