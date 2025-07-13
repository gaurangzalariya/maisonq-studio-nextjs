export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} MaisonQ Studio. A sister brand of <a target="_blank" href="https://wonqymedia.com" className="hover:underline">Wonqy Media</a>.
    </footer>
  )
}
