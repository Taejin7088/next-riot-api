'use server';

import { VERSION_UPDATE_INTERVAL } from '@/constants/time';

//버전을 받아와서 URL 리턴
export const getRiotUrl = async () => {
  try {
    const response = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json',
      { next: { revalidate: VERSION_UPDATE_INTERVAL } }
    );
    const data: string[] = await response.json();
    return `https://ddragon.leagueoflegends.com/cdn/${data[0]}/data/ko_KR`;
  } catch {
    throw new Error('버전을불러오는중 에러 발생');
  }
};
