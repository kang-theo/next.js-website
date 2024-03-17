import React from 'react'
import styles from "./style.module.css"

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
