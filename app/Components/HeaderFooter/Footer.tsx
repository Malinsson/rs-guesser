export default function Footer() {
  return (
    <footer className="z-20 px-4 md:px-8 py-6 bg-darkbeige">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6 md:gap-12 mb-6">

        <div className="flex flex-col gap-2 border-b border-breakline pb-4 md:border-b-0 md:pb-0">
          <p className="text-xl">Disclaimer</p>
          <p>OldSchool Runescape © Jagex. This is an unofficial, non-commercial fan project — not affiliated with or endorsed by the rights holders. All game assets belong to their respective owners.</p>
        </div>

        <div className="flex flex-col gap-2 border-b border-breakline pb-4 md:border-b-0 md:pb-0">
          <p className="text-xl">Helpful links</p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="https://oldschool.runescape.com/" className="hover:text-gray-400">
                OldSchool Runescape
              </a>
            </li>
            <li>
              <a href="https://oldschool.runescape.wiki/" className="hover:text-gray-400">
                Oldschool Runescape Wiki
              </a>
            </li>
            <li>
              <a href="https://runelite.net/" className="hover:text-gray-400">
                RuneLite
              </a>
            </li>
            <li>
              <a href="https://www.nationalgeographic.com/health/article/touch-grass-mental-health-outdoors" className="hover:text-gray-400">
                Help & Support
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-b border-breakline pb-4 md:border-b-0 md:pb-0">
          <p className="text-xl">Contact</p>
          <p>Have questions or feedback? Reach out to us!</p>
        </div>
      </div>

      <p className="text-center text-white pt-4">
        &copy; {new Date().getFullYear()} RS Guesser. No rights reserved.
      </p>
    </footer>
  );
}