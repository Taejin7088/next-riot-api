import React from 'react';

type Props = {
  y?: number;
  x?: number;
  children?: React.ReactNode;
};

const Spacer = ({ y = 0, x = 0, children }: Props): React.JSX.Element => {
  const spaceY = `mt-${y}`;
  const spaceX = `px-${x}`;
  return <div className={`${spaceY} ${spaceX}`}>{children}</div>;
};

export default Spacer;
