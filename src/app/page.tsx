//홈페이지 SSG
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '리그오브레전드 정보 사이트 홈',
  description: '리그오브레전드의 아이템 목록을 표시합니다.',
  keywords: ['리그오브레전드', '리그오브레전드 아이템'],
};
const ItemPage = async () => {
  return (
    <main className='flex flex-col items-center mt-10 gap-10'>
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        리그 오브 레전드 정보앱
      </Title>
      <Text size={SIZE.M} textColor={TEXT_COLORS.GRAY}>
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </Text>

      <Link href='/champions'>
        <Image
          src='/img/champion1.webp'
          alt='이미지'
          width={600}
          height={550}
        />
        <Text size={SIZE.L} textColor={TEXT_COLORS.YELLOW}>
          챔피언 목록보기
        </Text>
      </Link>

      <Link href='/rotation'>
        <Image
          src='/img/champion2.webp'
          alt='이미지'
          width={600}
          height={550}
        />
        <Text size={SIZE.L} textColor={TEXT_COLORS.YELLOW}>
          금주의 로테이션
        </Text>
      </Link>

      <Link href='/items'>
        <Image
          src='/img/champion3.webp'
          alt='이미지'
          width={600}
          height={550}
        />
        <Text size={SIZE.L} textColor={TEXT_COLORS.YELLOW}>
          아이템 목록보기
        </Text>
      </Link>
    </main>
  );
};

export default ItemPage;
