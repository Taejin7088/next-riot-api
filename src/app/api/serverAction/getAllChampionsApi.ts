'use server';
import { ChampionType } from '@/types/championsType';
import { VERSION_UPDATE_INTERVAL } from '@/constants/time';
import { getRiotUrlApi } from './getRiotUrlApi';

//전체 챔피언 목록을 response해주는 라우터 핸들러
//값 변경 주기 하루에 한번

export const getAllChampionsApi = async (): Promise<
  Record<string, ChampionType>
> => {
  try {
    const url = await getRiotUrlApi();
    const response = await fetch(`${url}/champion.json`, {
      next: { revalidate: VERSION_UPDATE_INTERVAL },
    });
    const { data }: { data: Record<string, ChampionType> } =
      await response.json();

    return data;
  } catch {
    throw new Error('전체챔피언 목록을 불러오는중 에러발생');
  }
};
