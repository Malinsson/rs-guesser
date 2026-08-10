import { Link } from "react-router";

type LinkButtonProps = {
  href: string;
  buttonText: string;
};

export default function LinkButton({ href, buttonText }: LinkButtonProps) {
  return (
    <Link to={href} className="bg-[url(/images/styling/button.png)] m-4 px-6 py-4 bg-no-repeat bg-contain bg-center text-white hover:bg-shadow-button hover:inset-ring-2 hover:inset-ring-lightbeige">
      {buttonText}
    </Link>
  );
}