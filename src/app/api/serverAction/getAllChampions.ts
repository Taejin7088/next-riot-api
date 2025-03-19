'use server';
import { ChampionType } from '@/types/championsType';
import { VERSION_UPDATE_INTERVAL } from '@/constants/time';
import { getRiotUrl } from './getRiotUrl';

//전체 챔피언목록을 받아오는 API(ISR)
export const getAllChampions = async (): Promise<
  Record<string, ChampionType>
> => {
  try {
    const url = await getRiotUrl();
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
