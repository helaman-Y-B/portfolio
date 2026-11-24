import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <Image src="/helama-size.webp" alt="Profile Image" width={50} height={50} />
            <span>Helamã Y. Barbour</span>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/aboutme">About Me</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    )
}