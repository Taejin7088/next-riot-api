import Text from './Text';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
import CardStyle from './CardStyle';
import Link from 'next/link';
type Props = {
  name: string;
  image: string;
  title: string;
  id: string;
};

const ItemCard = ({ name, image, title, id }: Props): React.JSX.Element => {
  return (
    <Link href={`/champions/${id}`}>
      <CardStyle>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${image}`}
          alt={`${name} 이미지`}
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
    </Link>
  );
};

export default ItemCard;
