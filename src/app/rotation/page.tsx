//로데이션챔피언목록 카드 그리드로표시 CSR
'use client';

import CardGrid from '@/components/ui/CardGrid';
import ChampionCard from '@/components/ui/ChampionCard';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import { INTERNAL_API_BASE } from '@/constants/url';
import { ChampionCardType } from '@/types/championsType';
import { CustomErr } from '@/types/customObj';
import { useEffect, useState } from 'react';

const RotationChampionsPage = () => {
  const [champions, setChampions] = useState<ChampionCardType[]>([]);

  useEffect(() => {
    const setRotation = async (): Promise<void> => {
      const response = await fetch(`${INTERNAL_API_BASE}champions/rotation`);
      const data: Record<string, ChampionCardType> | CustomErr =
        await response.json();
      setChampions(Object.values(data));
    };

    setRotation();
  }, []);

  if (champions.length === 0) {
    return (
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        로딩중입니다.
      </Title>
    );
  }

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

export default RotationChampionsPage;
