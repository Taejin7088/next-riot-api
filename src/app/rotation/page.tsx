//로데이션챔피언목록 카드 그리드로표시 CSR
'use client';

import CardGrid from '@/components/ui/CardGrid';
import ChampionCard from '@/components/ui/ChampionCard';
import Title from '@/components/ui/Title';
import { QUERY_KEY } from '@/constants/queryKey';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getRotationChampions } from '../api/common/getRotationChampions';
import { ChampionCardType } from '@/types/championsType';
import { CustomErr } from '@/types/customObj';
import Loading from '../loading';

const RotationChampionsPage = () => {
  const {
    data,
    error,
    isPending,
  }: UseQueryResult<ChampionCardType[], CustomErr> = useQuery({
    queryKey: [QUERY_KEY.ROTATION_CHAMPIONS],
    queryFn: getRotationChampions,
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return (
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        에러 :: {error.message}
      </Title>
    );
  }

  return (
    <CardGrid>
      {data.map((champion) => {
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
