import { SKILLATTRIBUTES } from '@/constants/attributes';

export default function CharacterCard() {
  return (
    <div className="p-4">
        <div className="flex h-32 gap-x-4">
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className="flex-1 h-full p-2 rounded-lg text-lg border border-primary">
                히트 상태시 바뀌는 특징
            </div>
        </div>

        <div className="flex justify-start gap-x-2 mt-4 rounded-md border border-primary ps-2 py-1">
            {Object.entries(SKILLATTRIBUTES).map(([key, attr]) => (
                <span className="flex w-8 h-8 bg-info items-center justify-center">
                    {attr.name}
                </span>
            ))}
        </div>

        <div className="overflow-x-auto mt-4">
            <table className="table border border-primary text-center">
            <thead>
                <tr className='align-middle'>
                    <th>기술명 및 커맨드</th>
                    <th>발생</th>
                    <th>가드</th>
                    <th>히트</th>
                    <th>카운터</th>
                    <th>판정</th>
                    <th>데미지</th>
                    <th>특징</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text-left'>63214</td>
                    <td>60</td>
                    <td>+10</td>
                    <td>+8</td>
                    <td>D, C</td>
                    <td>상</td>
                    <td>10</td>
                    <td>{SKILLATTRIBUTES[1].name}</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  );
}
