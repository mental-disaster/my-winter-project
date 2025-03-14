import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <header className="navbar">
            <div className="navbar-start">
                <Link href="/"><button className="btn btn-ghost"> 메인 이미지</button></Link>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal">
                <h1 className="text-3xl font-bold base-content mb-4">TEKKEN8</h1>
                </ul>
            </div>
            <div className="navbar-end">
                <details className="dropdown">
                    <summary className="btn btn-ghost"> 업데이트 </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                        <li><Link href="/patch-note1.12.01">1.12.01 패치노트</Link></li>
                        <li><Link href="/patch-note1.07.00">1.07.00 패치노트</Link></li>
                    </ul>
                </details>
            </div>
        </header>

        <main className="flex-grow">
            {children}
        </main>

        <footer className="footer footer-center text-base-content">
            <aside>
                <Link href="/copyright" className= "link link-hover">저작권 방침</Link>
            </aside>
        </footer>
    </>
  );
}