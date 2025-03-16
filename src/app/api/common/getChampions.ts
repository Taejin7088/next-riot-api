import { VERSION_UPDATE_INTERVAL } from '@/constants/time';
import { INTERNAL_API_BASE } from '@/constants/url';
import { ChampionCardType } from '@/types/championsType';

//전체 챔피언 목록에 쓰이는 API 요청(ISR)
export const getChampions = async (): Promise<ChampionCardType[]> => {
  const response = await fetch(`${INTERNAL_API_BASE}champions`, {
    next: { revalidate: VERSION_UPDATE_INTERVAL },
  });
  const data: Record<string, ChampionCardType> = await response.json();

  return Object.values(data);
};
