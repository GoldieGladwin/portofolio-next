export default function JadwalBelajar() {
  const jadwal = [
    { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
    { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
    { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-utama">Jadwal Belajar</h3>

 
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
       
          <thead className="bg-[#1e3a5f] text-white">
            <tr>
              <th className="w-6 px-4 py-2.5 font-semibold">Hari</th>
              <th className="w-6 px-4 py-2.5 font-semibold">Waktu</th>
              <th className="w-6 px-4 py-2.5 font-semibold">Kegiatan</th>
            </tr>
          </thead>

       
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {jadwal.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-3">{item.hari}</td>
                <td className="px-4 py-3">{item.waktu}</td>
                <td className="px-4 py-3">{item.kegiatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}