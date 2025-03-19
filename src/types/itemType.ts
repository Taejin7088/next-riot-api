//요청으로 받아오는 아이템 타입
export type AllItemType = {
  [itemId: string]: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
    };
    gold: {
      base: number;
      purchasable: boolean;
      total: number;
      sell: number;
    };
  };
};
