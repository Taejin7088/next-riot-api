import { ChampionCardType } from '@/types/championsType';
import { NextResponse } from 'next/server';
import { VERSION_UPDATE_INTERVAL } from '@/constants/time';
import { getRiotApiUrl } from '../../serverAction/getRiotApiUrl';

//전체 챔피언 목록을 response해주는 라우터 핸들러
//값 변경 주기 하루에 한번

export const GET = async (): Promise<NextResponse> => {
  const url = await getRiotApiUrl();
  const response = await fetch(`${url}/champion.json`, {
    next: { revalidate: VERSION_UPDATE_INTERVAL },
  });
  const { data }: { data: Record<string, ChampionCardType> } =
    await response.json();

  return NextResponse.json(data);
};
