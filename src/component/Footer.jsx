export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama dark:bg-gray-950 p-6 text-center text-latar dark:text-gray-300 text-sm">
      <p>&copy; {tahun} Goldie Gladwin Rajaborn Arivianto. Dibuat dengan Next.js di kelas industri UBIG</p>
    </footer>
  );
}
