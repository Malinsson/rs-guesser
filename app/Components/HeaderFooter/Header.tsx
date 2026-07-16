export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <h1 className="text-5xl text-white text-center">RS Guesser</h1>
      <div className="flex flex-col items-center justify-center">
        <nav className="flex justify-center gap-4 mt-2">
          <a href="/" className="text-white text-lg hover:text-gray-400">
            Home
          </a>
          <a href="/guess/herbs" className="text-white text-lg hover:text-gray-400">
            Herbs
          </a>
          <a href="/guess/seeds" className="text-white text-lg hover:text-gray-400">
            Seeds
          </a>
        </nav>
      </div>
    </header>
  );
}