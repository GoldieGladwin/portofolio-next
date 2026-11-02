export default function AboutCard({ judul, isi }) {
  return (
    <div>
      <div className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
        Tentang saya
      </div>
      <div className="w-full flex-1 rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-7 font-semibold text-gray-800 dark:text-gray-100 shadow-sm">
        Aku adalah seorang pelajar dari kelas XI rpl 1 yang mengikuti kegiatan kelas industri dari pt ubig, 
        saya suka mengembangkan program yang berbasis website
      </div>
    </div>
  );
}
