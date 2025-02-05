import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='my-4'>
      <h2 className='text-2xl'>던파 캐릭터 정보를 확인하세요</h2>
      <div className='flex justify-center my-4'>
        <Image
          width={100}
          height={100}
          src="/next.svg"
          alt="캐릭터 검색"
        />
      </div>
      <div className='flex justify-center'>
        <Link href="/character">
          <button className='btn btn-primary'>캐릭터 검색</button>
        </Link>
      </div>
    </div>
  );
}