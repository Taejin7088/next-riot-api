import { INTERNAL_API_BASE } from '@/constants/url';
import { ChampionCardType } from '@/types/championsType';
import { CustomErr } from '@/types/customObj';

//로테이션챔피언을 보내주는 함수
//에러발생시(data.state === 500)
export const getRotationChampions = async (): Promise<ChampionCardType[]> => {
  const response = await fetch(`${INTERNAL_API_BASE}rotation`);
  const data: Record<string, ChampionCardType> | CustomErr =
    await response.json();

  if (data.state === 500) throw data;

  return Object.values(data);
};
