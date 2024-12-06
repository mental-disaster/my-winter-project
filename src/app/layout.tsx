import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from './Home.module.css';
import { notoSansKr } from "./ui/fonts";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={'${notoSansKr.classname} antialiased'}>
        <header className={styles.header}>
          <h1>던담 클론</h1>
          <nav className={styles.nav}>
            <ul>
              <li><Link href="/" className={styles.navLink}>홈</Link></li>
              <li><Link href="/character" className={styles.navLink}>캐릭터 검색</Link></li>
              <li><Link href="/ranking" className={styles.navLink}>랭킹</Link></li>
              <li><Link href="/help" className={styles.navLink}>도움말</Link></li>
            </ul>
          </nav>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>던담 클론</p>
        </footer>
      </body>
    </html>
  );
}
