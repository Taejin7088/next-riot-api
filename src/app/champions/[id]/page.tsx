//챔피언상세보기 SSR
import { getChampion } from '@/app/api/common/getChampion';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import React from 'react';

const ChampionsDetailPage = async ({ params }: { params: { id: string } }) => {
  const championsDetailData = await getChampion(params.id);
  console.log(championsDetailData.id);
  console.log(championsDetailData.name); // 오로라 (챔피언이름)
  console.log(championsDetailData.title); // 세계경계선에선 마녀(제목);
  console.log(championsDetailData.image.full); // 챔피언사진링크
  console.log(championsDetailData.lore); // 챔피언스토리
  console.log(championsDetailData.spells); // 챔피언 스킬 객체배열
  return (
    <main className='flex p-10'>
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        {championsDetailData.name}
      </Title>
      <Text size={SIZE.L} textColor={TEXT_COLORS.ORANGE}>
        {championsDetailData.title}
      </Text>
    </main>
  );
};

export default ChampionsDetailPage;
