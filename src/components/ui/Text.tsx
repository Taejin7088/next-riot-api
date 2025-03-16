import { BG_COLORS, TEXT_COLORS, SIZE } from '@/constants/uiConstants';
// import { getTailwindColor } from '@/utils/getTailwindClass';
// import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  size: typeof SIZE.S | typeof SIZE.M | typeof SIZE.L;
  bgColor?: (typeof BG_COLORS)[keyof typeof BG_COLORS] | string;
  textColor: (typeof TEXT_COLORS)[keyof typeof TEXT_COLORS];
  children: ReactNode;
};

const Text = ({
  size,
  textColor,
  bgColor = 'bg-inherit',
  children,
}: Props): React.JSX.Element => {
  const testSize = {
    [SIZE.S]: 'text-sm',
    [SIZE.M]: 'text-base',
    [SIZE.L]: 'text-lg',
  };

  return (
    <p className={`${textColor} ${testSize[size]} ${bgColor}`}>{children}</p>
  );
};

export default Text;
