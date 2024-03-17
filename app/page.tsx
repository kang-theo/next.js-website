import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <Link href="/about">Go to About page</Link>
    </main>
  );
}
