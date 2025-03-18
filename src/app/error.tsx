'use client';

import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { SIZE, TEXT_COLORS } from '@/constants/uiConstants';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className='text-center mt-10 flex flex-col gap-10'>
      <Title size={SIZE.XL} textColor={TEXT_COLORS.RED}>
        에러발생 :: ${error.message}
      </Title>

      <Text size={SIZE.L} textColor={TEXT_COLORS.YELLOW}>
        <button onClick={() => reset()}>다시시도</button>
      </Text>

      <Link href='/'>
        <Text size={SIZE.L} textColor={TEXT_COLORS.YELLOW}>
          홈으로 돌아가기
        </Text>
      </Link>
    </main>
  );
}
