import { ChampionType } from '@/types/championsType';
import { getRiotUrlApi } from '../serverAction/getRiotUrlApi';

//챔피언 디테일 페이지에 쓰이는 api요청(SSR)
export const getDetailChampion = async (id: string): Promise<ChampionType> => {
  try {
    const url = await getRiotUrlApi();
    const response = await fetch(`${url}/champion/${id}.json`, {
      cache: 'no-store',
    });
    const { data }: { data: { [key: string]: ChampionType } } =
      await response.json();
    return data[id];
  } catch {
    throw new Error('챔피언 디테일 정보 불러오는중 에러 발생');
  }
};
