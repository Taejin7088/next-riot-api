import { VERSION_UPDATE_INTERVAL } from '@/constants/time';
import { ChampionCardType } from '@/types/championsType';
import { NextResponse } from 'next/server';

//로테이션 챔피언 목록을 response해주는 라우터 핸들러
export const GET = async (): Promise<NextResponse> => {
  //로테이션 챔피언 id를 받아오는 요청
  const res = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'X-Riot-Token': process.env.NEXT_PUBLIC_RIOT_API_KEY!,
      },
      next: { revalidate: VERSION_UPDATE_INTERVAL },
    }
  );
  const { freeChampionIds } = await res.json();

  //전체 챔피언 목록을 보내주는 라우터 핸들러에 요청
  const response = await fetch(`http://localhost:3000/api/champions`, {
    next: { revalidate: VERSION_UPDATE_INTERVAL },
  });
  const data: Record<string, ChampionCardType> = await response.json();

  return NextResponse.json(data);
};
