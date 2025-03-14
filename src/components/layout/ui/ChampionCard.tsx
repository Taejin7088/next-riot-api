import Text from './Text';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
import CardStyle from './CardStyle';
type Props = {
  name: string;
  image: string;
  title: string;
};

const ItemCard = ({ name, image, title }: Props): React.JSX.Element => {
  return (
    <CardStyle>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${image}`}
        alt='v13 image'
        width={180}
        height={180}
      />

      <Text size={SIZE.M} textColor={TEXT_COLORS.RED}>
        {name}
      </Text>

      <Text size={SIZE.S} textColor={TEXT_COLORS.PURPLE}>
        {title}
      </Text>
    </CardStyle>
  );
};

export default ItemCard;
