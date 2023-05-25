import Link from "next/link";

export default function Navbar() {
  return (
    <section>
      <nav className="py-4 flex justify-around shadow-md">
        <Link href="/">Home</Link>
        <Link href="/Products">Products</Link>
        <Link href="/Blogs">Blog</Link>
        <Link href="/todoPage">Todo</Link>
      </nav>
    </section>
  );
}
