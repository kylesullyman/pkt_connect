// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png"; // Adjust the path to your image file

export default function Header() {
  return (
    <header className="flex bg-white text-black p-4 justify-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="flex 
            pt-5"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className="flex
                items-center
                p-1"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex 
            pt-5"
            >
              About
            </Link>
          </li>
          {/* Add a new link to the contact page
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    */}
        </ul>
      </nav>
    </header>
  );
}
