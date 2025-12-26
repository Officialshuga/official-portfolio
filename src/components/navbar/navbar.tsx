
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-orange-300">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/project" className="hover:text-orange-500 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link href="/contact-us" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <a target="_blank" href="https://wa.link/hb9r2p"> Hire Me </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-orange-300">
          <div className="flex flex-col gap-4 px-6 py-6 text-lg font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/project" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact-us" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
