import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-muted mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Hanks Ehimare</h3>
          <p className="text-sm text-muted-foreground">
            Frontend Developer • React • Next.js
          </p>
        </div>

        {/* Center Links */}
        <nav className="flex gap-6 text-sm">
          <Link href={"/about"} className="hover:text-blue-500 transition">
            About
          </Link>
          <Link href={"/project"} className="hover:text-blue-500 transition">
            Projects
          </Link>
          <Link href={"/"} className="hover:text-blue-500 transition">
            Home
          </Link>
        </nav>

        {/* Right */}
        <div className="text-center md:text-right text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hanks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}