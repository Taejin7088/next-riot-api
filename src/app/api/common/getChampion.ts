import { ChampionType } from '@/types/championsType';
import { getApiUrl } from './getApiUrl';

//챔피언 디테일 페이지에 쓰이는 api요청(SSR)
export const getChampion = async (id: string): Promise<ChampionType> => {
  const url = await getApiUrl();
  const response = await fetch(`${url}/champion/${id}.json`, {
    cache: 'no-store',
  });
  const { data }: { data: { [key: string]: ChampionType } } =
    await response.json();
  return data[id];
};
