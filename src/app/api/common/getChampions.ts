import { ChampionCardType } from '@/types/championsType';
import { getAllChampionsApi } from '../serverAction/getAllChampionsApi';

//전체 챔피언 목록에 쓰이는 API 요청(ISR)
export const getChampions = async (): Promise<ChampionCardType[]> => {
  const data: Record<string, ChampionCardType> = await getAllChampionsApi();

  return Object.values(data);
};
