import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='text-center mt-10'>
      <Link href='/'>
        <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
          요청한 페이지를 찾을 수 없습니다.
        </Title>

        <Text size={SIZE.L} textColor={TEXT_COLORS.YELLOW}>
          홈으로 돌아가기
        </Text>
      </Link>
    </main>
  );
}
