import Link from "next/link";
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <nav className={styles.Nav}>
                <Link href='/' className={styles.Link}>Home</Link>
                <Link href='/Products' className={styles.Link}>Products</Link>
                <Link href='/about' className={styles.Link}>About</Link>
                <Link href='/faq' className={styles.Link}>Faq</Link>
            </nav>
        </>
    )
}