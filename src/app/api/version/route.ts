import { VERSION_UPDATE_INTERVAL } from '@/constants/time';
import { NextResponse } from 'next/server';

//버전정보를 하루에 한번씩 받아와서 response해주는 라우터 핸들러
//값 변경 주기 하루에 한번
export const GET = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json',
    { next: { revalidate: VERSION_UPDATE_INTERVAL } }
  );
  const data = await response.json();

  return NextResponse.json(data[0]);
};
