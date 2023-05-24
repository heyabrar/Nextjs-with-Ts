import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.Nav}>
        <Link href="/" className={styles.Link}>
          Home
        </Link>
        <Link href="/Products" className={styles.Link}>
          Products
        </Link>
        <Link href="/Blogs" className={styles.Link}>
          Blog
        </Link>
        <Link href="/assignment" className={styles.Link}>
          Assignment
        </Link>
        <Link href="/todoPage" className={styles.Link}>
          Todo
        </Link>
      </nav>
    </>
  );
}
