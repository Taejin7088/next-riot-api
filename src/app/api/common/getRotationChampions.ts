import { ChampionCardType } from '@/types/championsType';
import { CustomErr } from '@/types/customObj';

//로테이션챔피언에 쓰이는 api함수(CSR)
//에러발생시(data.state === 500)
export const getRotationChampions = async (): Promise<ChampionCardType[]> => {
  const response = await fetch('/api/rotation', { cache: 'no-store' });
  const data: Record<string, ChampionCardType> | CustomErr =
    await response.json();

  if (data.state === 500) throw data.message;

  return Object.values(data);
};
