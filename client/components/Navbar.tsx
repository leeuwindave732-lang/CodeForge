import { Code2, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Languages", href: "/languages" },
    { label: "Tips & Tricks", href: "/tips" },
    { label: "Techniques", href: "/techniques" },
    { label: "About", href: "/About" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-sage-500 rounded-lg flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-serif font-bold hidden sm:inline">
            CodeForge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition ${
                isActive(link.href)
                  ? "text-sage-600 border-b-2 border-sage-600"
                  : "text-foreground hover:text-sage-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:inline-block px-6 py-2 rounded-full bg-sage-500 text-white font-medium text-sm hover:bg-sage-600 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition ${
                  isActive(link.href)
                    ? "bg-sage-100 text-sage-600 font-medium"
                    : "text-foreground hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full py-2 px-4 rounded-full bg-sage-500 text-white font-medium hover:bg-sage-600 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
