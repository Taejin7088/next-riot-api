import { BG_COLORS, TEXT_COLORS, SIZE } from '@/constants/uiConstants';
import React from 'react';
import Text from './ui/Text';
import Link from 'next/link';
// import { getTailwindColor } from '@/utils/getTailwindClass';

const AppHeader = () => {
  return (
    <nav
      className={`${BG_COLORS.NAVY} h-[60px] flex items-center justify-around`}
    >
      <Link href='/'>
        <Text size={SIZE.L} textColor={TEXT_COLORS.WHITE}>
          홈
        </Text>
      </Link>

      <Link href='/champions'>
        <Text size={SIZE.L} textColor={TEXT_COLORS.WHITE}>
          챔피언목록
        </Text>
      </Link>

      <Link href='/items'>
        <Text size={SIZE.L} textColor={TEXT_COLORS.WHITE}>
          아이템목록
        </Text>
      </Link>

      <Link href='/rotation'>
        <Text size={SIZE.L} textColor={TEXT_COLORS.WHITE}>
          챔피언 로테이션
        </Text>
      </Link>
    </nav>
  );
};

export default AppHeader;
