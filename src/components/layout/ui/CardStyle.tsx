import React from 'react';

const CardStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[300px] w-[300px] border-primary-white border-solid border flex flex-col gap-4 items-center overflow-y-auto'>
      {children}
    </div>
  );
};

export default CardStyle;
