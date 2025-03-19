//챔피언전체목록 ISR 그리드 카드로 표시 ISR(86400)
import React from 'react';
import ChampionCard from '@/components/ui/ChampionCard';
import CardGrid from '@/components/ui/CardGrid';
import { ChampionCardType } from '@/types/championsType';
import { getAllChampions } from '../api/serverAction/getAllChampions';

export const metadata = {
  title: '리그오브레전드 챔피언 목록',
  description: '리그오브레전드의 챔피언 목록을 표시합니다.',
  keywords: ['리그오브레전드', '리그오브레전드 챔피언'],
};

const ChampionsPage = async () => {
  const data: Record<string, ChampionCardType> = await getAllChampions();
  const champions = Object.values(data);

  return (
    <CardGrid>
      {champions.map((champion) => {
        return (
          <ChampionCard
            key={champion.name}
            name={champion.name}
            image={champion.image.full}
            title={champion.title}
            id={champion.id}
          />
        );
      })}
    </CardGrid>
  );
};

export default ChampionsPage;
