import React from 'react';
import Text from './Text';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
type Props = {
  name: string;
  image: string;
  base: number;
  sell: number;
  description: string;
};

const ItemCard = ({
  name,
  image,
  base,
  sell,
  description,
}: Props): React.JSX.Element => {
  return (
    <div className='h-[300px] w-[300px] border-primary-white border-solid border flex flex-col gap-4 items-center overflow-y-auto'>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${image}`}
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
    </div>
  );
};

export default ItemCard;
