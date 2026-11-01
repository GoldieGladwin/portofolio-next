
export default function Footer () {
    const tahun = new Date().getFullYear();
    
    return (
       <footer className="mt-auto bg-utama p-6 text-center text-latar ">
        <p>&copy; {tahun} Goldie Gladwin Rajaborn Arivianto. Dibuat dengan Next.js di kelas 
            industri ubig</p>
       </footer>
    );
}