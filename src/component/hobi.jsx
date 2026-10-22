export default function hobi ({}) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-utama">Hobi</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
          <li>Bermain futsal</li>
          <li>Membaca komik</li>
          <li>Mendesain poster</li>
        </ul>
        </div>
        <div>
            
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-utama">Cita-cita</h3>
        <p className="mb-2 text-sm text-gray-700">
          Menjadi <span className="font-semibold text-utama">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
        </p>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
          <li>Menuntaskan Kelas Industri UBIG sampai Semester 4</li>
          <li>Magang di perusahaan teknologi</li>
          <li>Bekerja sebagai Web Developer</li>
        </ol>
      </div>
      </div>
    </div>
    )
}