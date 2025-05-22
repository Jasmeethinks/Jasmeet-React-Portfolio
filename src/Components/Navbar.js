import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // optional: close mobile menu if open
  };

  return (
    <>
      <nav className="w-full h-full bg-[#121212] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 font-semibold">
            {/* Left: Logo and Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl mr-4 font-bold text-white py-2 rounded-2xl">
                  JK
                </span>
              </div>
              <div className="hidden md:block ml-4">
                <span className="text-white font-semibold text-lg py-2">
                  Jasmeet Kaur
                </span>
              </div>
            </div>

            {/* Center (Desktop Navigation Links) */}
            <div className="hidden md:block">
              <ul className="flex space-x-5">
                <li>
                  <a
                    href="#About"
                    className="text-white hover:text-yellow-500 px-12 py-03 rounded-md text-md font-md"
                    onClick={(e) => handleSmoothScroll(e, "About")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Skills"
                    className="text-white hover:text-yellow-500 px-12 py-03 rounded-md text-md font-md"
                    onClick={(e) => handleSmoothScroll(e, "Skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="text-white hover:text-yellow-500 px-12 py-03 rounded-md text-md font-md"
                    onClick={(e) => handleSmoothScroll(e, "Projects")}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="text-white hover:text-yellow-500 px-10 py-03 rounded-md text-md font-md"
                    onClick={(e) => handleSmoothScroll(e, "Contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right (Mobile Hamburger Button) */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-500 focus:outline-none transition-color duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#121212] shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
              <a
                href="#About"
                className="text-white text-center hover:text-yellow-500 font-semibold block px-3 py-2 rounded-md transition-color duration-200"
                onClick={(e) => handleSmoothScroll(e, "About")}
              >
                About
              </a>
              <a
                href="#Skills"
                className="text-white text-center hover:text-yellow-500 font-semibold block px-3 py-2 rounded-md transition-color duration-200"
                onClick={(e) => handleSmoothScroll(e, "Skills")}
              >
                Skills
              </a>
              <a
                href="#Projects"
                className="text-white text-center hover:text-yellow-500 font-semibold block px-3 py-2 rounded-md transition-color duration-200"
                onClick={(e) => handleSmoothScroll(e, "Projects")}
              >
                Projects
              </a>
              <a
                href="#Contact"
                className="text-white text-center hover:text-yellow-500 font-semibold block px-3 py-2 rounded-md transition-color duration-200"
                onClick={(e) => handleSmoothScroll(e, "Contact")}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
