// components/Header.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex bg-white text-black p-4 justify-center">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link href="/about">About</Link>
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