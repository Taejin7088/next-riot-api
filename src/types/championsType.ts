export type ChampionType = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;

  image: {
    full: string;
    sprite: string;
    group: string;
  };

  lore: string;

  spells: {
    id: string;
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
    };
  }[];
};

export type ChampionCardType = Pick<ChampionType, 'name' | 'title' | 'id'> & {
  image: Pick<ChampionType['image'], 'full'>;
};
