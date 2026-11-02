export default function Hobi() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-utama dark:text-sky-200">Hobi</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
          <li>ngoding</li>
          <li>Membaca buku</li>
          <li>bermain game</li>
        </ul>
      </div>
      <div>
        <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-utama dark:text-sky-200">Cita-cita</h3>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
            Menjadi <span className="font-semibold text-utama dark:text-sky-200">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>lulus dari kelas industri ubig</li>
            <li>Magang di perusahaan teknologi</li>
            <li>Bekerja sebagai Web Developer</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
