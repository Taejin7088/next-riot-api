//챔피언상세보기 SSR
//params로 받아온 id로 챔피언 디테일 정보를 받아와서 표시
import { getDetailChampion } from '@/app/api/common/getDetailChampion';
import CardStyle from '@/components/ui/CardStyle';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import { IMG_URL_BASE } from '@/constants/url';
import Image from 'next/image';
import React from 'react';

type params = { params: { id: string } };

export const generateMetadata = async ({ params }: params) => {
  const championsDetailData = await getDetailChampion(params.id);
  return {
    title: `${championsDetailData.name} 상세정보`,
    description: `${championsDetailData.id}스토리와 스킬 정보를 표시합니다.`,
    keywords: [`${championsDetailData.name}`, `${championsDetailData.lore}`],
  };
};

const ChampionsDetailPage = async ({ params }: params) => {
  const championsDetailData = await getDetailChampion(params.id);

  return (
    <main className='flex flex-col p-10 gap-7'>
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        {championsDetailData.name}
      </Title>

      <Text size={SIZE.L} textColor={TEXT_COLORS.ORANGE}>
        {championsDetailData.title}
      </Text>

      <Image
        src={`${IMG_URL_BASE}champion/${championsDetailData.image.full}`}
        alt={`${championsDetailData.name} 이미지`}
        width={180}
        height={180}
      ></Image>

      <Text size={SIZE.S} textColor={TEXT_COLORS.GRAY}>
        {championsDetailData.lore}
      </Text>

      <section className='mt-10'>
        <Title size={SIZE.L} textColor={TEXT_COLORS.ORANGE}>
          {championsDetailData.name}의 스킬
        </Title>

        <div className='flex flex-wrap gap-5'>
          {championsDetailData.spells.map((spell) => {
            return (
              <CardStyle key={spell.id}>
                <Text size={SIZE.L} textColor={TEXT_COLORS.RED}>
                  {spell.name}
                </Text>
                <Image
                  src={`${IMG_URL_BASE}spell/${spell.image.full}`}
                  alt={`${spell.name} 이미지`}
                  width={70}
                  height={70}
                ></Image>
                <Text size={SIZE.L} textColor={TEXT_COLORS.RED}>
                  {spell.description.replace(/<[^>]*>/g, '')}
                </Text>
              </CardStyle>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default ChampionsDetailPage;
