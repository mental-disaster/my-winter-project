import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <header className="navbar">
            <div className="navbar-start">
                <h1>헤더</h1>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal">
                    <li><Link href="/">홈</Link></li>
                    <li><Link href="/">홈</Link></li>
                    <li><Link href="/">홈</Link></li>
                    <li><Link href="/">홈</Link></li>
                </ul>
            </div>
            <div className="navbar-end"></div>
        </header>

        <main className="flex-grow">
            {children}
        </main>

        <footer className="footer footer-center text-base-content">
            <aside>
                <p>푸터</p>
            </aside>
        </footer>
    </>
  );
}