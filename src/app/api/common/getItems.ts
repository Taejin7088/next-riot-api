import { AllItemType } from '@/types/itemType';
import { getRiotUrlApi } from '../serverAction/getRiotUrlApi';

//Item 목록에 쓰이는 API 요청(SSG)
export const getItems = async (): Promise<[string, AllItemType[string]][]> => {
  const url = await getRiotUrlApi();
  const response = await fetch(`${url}/item.json`, { cache: 'force-cache' });
  const { data }: { data: AllItemType } = await response.json();

  return Object.entries(data);
};
