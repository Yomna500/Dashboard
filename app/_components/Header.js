import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-3 bg-gray-50  top-0 fixed w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
