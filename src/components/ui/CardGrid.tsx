import React from 'react';

const CardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-wrap gap-8 h-full w-full mt-10 justify-center'>
      {children}
    </section>
  );
};

export default CardGrid;
