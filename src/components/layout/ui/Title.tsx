import { BG_COLORS, TEXT_COLORS, SIZE } from '@/constants/uiConstants';
import React, { ReactNode } from 'react';

type Props = {
  size: typeof SIZE.L | typeof SIZE.XL;
  bgColor: (typeof BG_COLORS)[keyof typeof BG_COLORS];
  textColor: typeof TEXT_COLORS.ORANGE | typeof TEXT_COLORS.RED;
  children: ReactNode;
};

const Title = ({
  size,
  textColor,
  bgColor,
  children,
}: Props): React.JSX.Element => {
  const testSize = {
    [SIZE.L]: 'text-xl',
    [SIZE.XL]: 'text-3xl',
  };

  return (
    <h1 className={`${textColor} ${bgColor} ${testSize[size]}`}>{children}</h1>
  );
};

export default Title;
