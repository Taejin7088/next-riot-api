import { getApiUrl } from './getApiUrl';
import { ChampionCardType } from '@/types/championsType';

export const getChampions = async (): Promise<ChampionCardType[]> => {
  const url = await getApiUrl();
  const response = await fetch(`${url}/champion.json`, {
    next: { revalidate: 86400 },
  });
  const { data }: { data: Record<string, ChampionCardType> } =
    await response.json();

  return Object.values(data);
};
