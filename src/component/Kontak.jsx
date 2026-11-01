export default function Kontak () {
    return(
        <main className="mx-auto max-w-5xl px-4 py-10 grid gap-2">
           <h1 className="text-3xl font-semibold text-utama md:text-4xl">Hubungi saya</h1>
           <p className="text-md">punya pertanyaan atau ingin bekerja sama</p>
            <div className="grid grid-cols-1 md:grid-cols-3 ga[-6 items-start" >
                <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-400">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nama" className="block font-semibold">Nama lengkap
                            </label>
                            <input type="text" id="nama" name="nama" placeholder="contoh:Goldie Gladwin" required className="mt-1 w-full rounded-lg border
border-gray-300 bg-white p-2"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold">email
                            </label>
                             <input type="text" id="email" name="email" placeholder="contoh:Golie@gmail.com" required className="mt-1 w-full rounded-lg border
border-gray-300 bg-white p-2"/>
                        </div>
                        <div>
                            <label htmlFor="nomor" className="block font-semibold">nomor telepon
                            </label>
                             <input type="text" id="nomor" name="nomor" placeholder="contoh:09876545678" required className="mt-1 w-full rounded-lg border
border-gray-300 bg-white p-2"/>
                        </div>
                        <div>
                            <label htmlFor="keperluan" className="block font-semibold"> pilih keperluan
                            </label>
                             <select name="keperluan" id="keperluan" defaultValue={""} className="">
                             <option value="" disabled>pilih keperluan</option>
                             <option value="" >jasa membuat website</option>
                             <option value="" >jasa membuat aplikasi</option>
                             <option value="" >jasa membuat iot</option>
                             </select>
                        </div>
                        <div>
                            <label htmlFor="pesan" className="block font-semibold"> pesan</label>
                            <textarea name="pesan" id="pesan" placeholder="tulis pesan mu disini"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}