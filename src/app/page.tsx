import Link from 'next/link';
import Image from "next/image";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <h2>던파 캐릭터 정보를 확인하세요</h2>
      <img
        src="/next.svg"
        alt="캐릭터 검색"
        style={{ width: "50%", marginTop: "2rem" }}
      />
      <Link href="/character">
        <button className={styles.button}>캐릭터 검색</button>
      </Link>
    </div>
  );
}