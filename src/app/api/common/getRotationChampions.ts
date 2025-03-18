import { ChampionCardType } from '@/types/championsType';
import { CustomErr } from '@/types/customObj';

//로테이션챔피언을 보내주는 함수
//에러발생시(data.state === 500)
export const getRotationChampions = async (): Promise<ChampionCardType[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/rotation`
  );
  const data: Record<string, ChampionCardType> | CustomErr =
    await response.json();

  if (data.state === 500) throw data;

  return Object.values(data);
};
