import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <Link href="/about">Go to About page</Link>
      <br />
      <Link href="/users">Go to Users page</Link>
    </main>
  );
}
