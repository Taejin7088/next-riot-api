//챔피언상세보기 SSR
import { getChampion } from '@/app/api/common/getChampion';
import CardStyle from '@/components/ui/CardStyle';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
import React from 'react';

type params = { params: { id: string } };

export const generateMetadata = async ({ params }: params) => {
  const championsDetailData = await getChampion(params.id);
  return {
    title: `${championsDetailData.name} 상세정보`,
    description: `${championsDetailData.id}스토리와 스킬 정보를 표시합니다.`,
    keywords: [`${championsDetailData.name}`, `${championsDetailData.lore}`],
  };
};

const ChampionsDetailPage = async ({ params }: params) => {
  const championsDetailData = await getChampion(params.id);
  // console.log(championsDetailData.id);
  // console.log(championsDetailData.name); // 오로라 (챔피언이름)
  // console.log(championsDetailData.title); // 세계경계선에선 마녀(제목);
  // console.log(championsDetailData.image.full); // 챔피언사진링크
  // console.log(championsDetailData.lore); // 챔피언스토리
  // console.log(championsDetailData.spells); // 챔피언 스킬 객체배열

  return (
    <main className='flex flex-col p-10 gap-7'>
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        {championsDetailData.name}
      </Title>

      <Text size={SIZE.L} textColor={TEXT_COLORS.ORANGE}>
        {championsDetailData.title}
      </Text>

      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${championsDetailData.image.full}`}
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
                  src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${spell.image.full}`}
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
