import { ChampionType } from '@/types/championsType';
import { getApiUrl } from './getApiUrl';

export const getChampion = async (id: string): Promise<ChampionType> => {
  const url = await getApiUrl();
  const response = await fetch(`${url}/champion/${id}.json`, {
    cache: 'no-store',
  });
  const { data }: { data: { [key: string]: ChampionType } } =
    await response.json();
  return data[id];
};
