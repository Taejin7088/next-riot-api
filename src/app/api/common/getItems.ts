import { AllItemType } from '@/types/itemType';
import { getRiotUrl } from '../serverAction/getRiotUrl';

//Item 목록에 쓰이는 API 요청(SSG)
export const getItems = async (): Promise<[string, AllItemType[string]][]> => {
  try {
    const url = await getRiotUrl();
    const response = await fetch(`${url}/item.json`, { cache: 'force-cache' });
    const { data }: { data: AllItemType } = await response.json();
    return Object.entries(data);
  } catch {
    throw new Error('아이템 데이터 불러오는중 에러발생');
  }
};
