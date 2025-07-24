import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link href="/">Home</Link>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}   