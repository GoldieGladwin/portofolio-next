import FormKontak from "@/component/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi saya untuk pertanyaan atau kerja sama proyek.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
        Hubungi Saya
      </h1>
      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        <aside className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-utama dark:text-sky-200">
            Temukan Saya di
          </h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-600 dark:text-gray-400">GitHub</p>
              <a
                href="https://github.com/Goldiegladwin"
                target="_blank"
                rel="noreferrer"
                className="text-aksen dark:text-red-300 hover:underline"
              >
                github.com/Goldiegladwin
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-600 dark:text-gray-400">Email</p>
              <a
                href="mailto:GoldieGladwin77@gmail.com"
                className="text-aksen dark:text-red-300 hover:underline"
              >
                GoldieGladwin77@gmail.com
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
