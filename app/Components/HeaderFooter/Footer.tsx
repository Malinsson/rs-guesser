export default function Footer() {
  return (
    <footer className="p-4 bg-darkbeige">
      <p className="text-center text-white">
        &copy; {new Date().getFullYear()} RS Guesser. All rights reserved.
      </p>
    </footer>
  );
}