import { AllItemType } from '@/types/itemType';
import { getApiUrl } from './getApiUrl';

export const getItems = async (): Promise<[string, AllItemType[string]][]> => {
  const url = await getApiUrl();
  const response = await fetch(`${url}/item.json`, {
    next: { revalidate: 86400 },
  });
  const { data }: { data: AllItemType } = await response.json();

  return Object.entries(data);
};
