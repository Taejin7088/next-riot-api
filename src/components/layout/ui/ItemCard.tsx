import React from 'react';
import Text from './Text';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
import Spacer from './Spacer';
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
      <Spacer y={10} />
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${image}`}
        alt='v13 image'
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
      <Spacer x={10}>
        <Text size={SIZE.S} textColor={TEXT_COLORS.PURPLE}>
          {description.replace(/<[^>]*>/g, '')}
        </Text>
      </Spacer>
    </div>
  );
};

export default ItemCard;
