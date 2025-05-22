import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
export default Footer;

function Footer() {
  return (
    <footer id="Footer" className="w-full bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl text-center bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent font-bold mb-4">
              Jasmeet Kaur
            </h3>
          </div>

          <div className="text-center">
            <h3 className="text-xl bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#About"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-center">
            <h3 className="text-xl text-center bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent font-bold mb-4">
              Connect
            </h3>
            <div className="flex justify-center md:justify-center space-x-4">
              <a
                href="https://github.com/Jasmeethinks"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasmeetings/"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-300">
            © 2025 Jasmeet Kaur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
