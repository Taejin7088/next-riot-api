import React from 'react';

//카드가 오는 영역의 레이아웃 스타일
const CardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-wrap gap-8 h-full w-full mt-10 justify-center'>
      {children}
    </section>
  );
};

export default CardGrid;
