//요청으로 받아오는 챔피언의 타입
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

//챔피언데이터로 카드를 만들때 필요한타입
export type ChampionCardType = Pick<ChampionType, 'name' | 'title' | 'id'> & {
  image: Pick<ChampionType['image'], 'full'>;
};
