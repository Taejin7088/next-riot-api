import { INTERNAL_API_BASE } from '@/constants/url';
import { ChampionType } from '@/types/championsType';
import { NextResponse } from 'next/server';

//로테이션 챔피언 목록을 response해주는 라우터 핸들러
export const GET = async (): Promise<NextResponse> => {
  //로테이션 챔피언 id를 받아오는 요청
  try {
    const res = await fetch(
      'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations1',
      {
        headers: {
          'X-Riot-Token': process.env.RIOT_API_KEY!,
        },
      }
    );
    const { freeChampionIds } = await res.json();

    //전체 챔피언 목록을 보내주는 라우터 핸들러에 요청
    const response = await fetch(`${INTERNAL_API_BASE}champions`);
    const data: Record<string, ChampionType> = await response.json();

    //전체데이터에서 챔피언 무료챔피언 데이터만 뽑아내기
    const newData: Record<string, ChampionType> = {};
    Object.entries(data).forEach((champion) => {
      if (freeChampionIds.includes(+champion[1].key)) {
        newData[champion[0]] = champion[1];
      }
    });
    return NextResponse.json(newData);
  } catch {
    return NextResponse.json({
      state: 500,
      errorMessage: '로테이션 챔피언을 불러오는 중 에러발생',
    });
  }
};
