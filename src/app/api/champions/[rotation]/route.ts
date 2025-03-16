import { VERSION_UPDATE_INTERVAL } from '@/constants/time';
import { INTERNAL_API_BASE } from '@/constants/url';
import { ChampionType } from '@/types/championsType';
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

  console.log(freeChampionIds);

  //전체 챔피언 목록을 보내주는 라우터 핸들러에 요청
  const response = await fetch(`${INTERNAL_API_BASE}champions`, {
    next: { revalidate: VERSION_UPDATE_INTERVAL },
  });
  const data: Record<string, ChampionType> = await response.json();

  //전체데이터에서 챔피언 무료챔피언 데이터만 뽑아내기
  const newData: Record<string, ChampionType> = {};
  Object.entries(data).forEach((champion) => {
    if (freeChampionIds.includes(+champion[1].key)) {
      console.log(champion);
      newData[champion[0]] = champion[1];
    }
  });

  return NextResponse.json(newData);
};
