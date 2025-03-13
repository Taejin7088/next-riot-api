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
