import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';

export default function Loading() {
  return (
    <main className='text-center mt-10'>
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        로딩 중...
      </Title>

      <Text size={SIZE.L} textColor={TEXT_COLORS.YELLOW}>
        잠시만 기다려 주세요.
      </Text>
    </main>
  );
}
