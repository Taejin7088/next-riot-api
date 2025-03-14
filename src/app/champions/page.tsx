//챔피언전체목록 ISR 그리드 카드로 표시 ISR(86400)
import React from 'react';
import { getChampions } from '../api/common/getChampions';
import ChampionCard from '@/components/layout/ui/ChampionCard';

export const metadata = {
  title: '리그오브레전드 챔피언 목록',
  description: '리그오브레전드의 챔피언 목록을 표시합니다.',
  keywords: ['리그오브레전드', '리그오브레전드 챔피언'],
};

const ChampionsPage = async () => {
  const champions = await getChampions();

  console.log(champions);

  return (
    <section className='flex flex-wrap gap-8 h-full w-full mt-10 justify-center'>
      {champions.map((champion) => {
        return (
          <ChampionCard
            key={champion.name}
            name={champion.name}
            image={champion.image.full}
            title={champion.title}
          />
        );
      })}
    </section>
  );
};

export default ChampionsPage;
