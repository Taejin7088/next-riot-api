'use server';

import { VERSION_UPDATE_INTERVAL } from '@/constants/time';

//받아온 버전으로 URL을 만들어주는 함수
export const getRiotUrlApi = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json',
    { next: { revalidate: VERSION_UPDATE_INTERVAL } }
  );
  const data = await response.json();
  return `https://ddragon.leagueoflegends.com/cdn/${data[0]}/data/ko_KR`;
};
