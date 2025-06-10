import LocaleSwitch from "../ui/LocaleSwitch";
import { Logo } from "./Logo";
import ThemeSwitch from "../ui/ThemeSwitch";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-gutter">
      <nav className="flex justify-between items-center px-8 py-4">
        <Logo />
        <div className="flex items-center gap-4">
          <Navigation />
          <div className="border-l border-divider pl-4">
            <ThemeSwitch />
          </div>
          <div className="border-l border-divider pl-4">
            <LocaleSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
