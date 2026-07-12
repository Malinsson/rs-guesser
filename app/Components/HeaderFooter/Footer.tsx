export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4">
      <p className="text-center text-white">
        &copy; {new Date().getFullYear()} RS Guesser. All rights reserved.
      </p>
    </footer>
  );
}