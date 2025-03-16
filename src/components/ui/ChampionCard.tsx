import Text from './Text';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
import CardStyle from './CardStyle';
import Link from 'next/link';
import { IMG_URL_BASE } from '@/constants/url';
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
          src={`${IMG_URL_BASE}champion/${image}`}
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
