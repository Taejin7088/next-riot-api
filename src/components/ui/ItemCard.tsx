import React from 'react';
import Text from './Text';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
import { IMG_URL_BASE } from '@/constants/url';
import CardStyle from './CardStyle';
type Props = {
  name: string;
  image: string;
  base: number;
  sell: number;
  description: string;
};

//아이템을 표시하는데 쓰이는 카드
const ItemCard = ({
  name,
  image,
  base,
  sell,
  description,
}: Props): React.JSX.Element => {
  return (
    <CardStyle>
      <Image
        src={`${IMG_URL_BASE}item/${image}`}
        alt={`${name} 이미지`}
        width={100}
        height={100}
      />

      <Text size={SIZE.M} textColor={TEXT_COLORS.RED}>
        {name}
      </Text>

      <Text size={SIZE.S} textColor={TEXT_COLORS.GREEN}>
        가격 : {base}원
      </Text>

      <Text size={SIZE.S} textColor={TEXT_COLORS.GREEN}>
        팔때 : {sell}원
      </Text>

      <div className='p-3'>
        <Text size={SIZE.S} textColor={TEXT_COLORS.PURPLE}>
          {description.replace(/<[^>]*>/g, '')}
        </Text>
      </div>
    </CardStyle>
  );
};

export default ItemCard;
