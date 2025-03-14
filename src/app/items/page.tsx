//아이템전체목록 카드 그리드로 표시 SSG
import React from 'react';
import { getItems } from '../api/common/getItems';
import ItemCard from '@/components/ui/ItemCard';
export const metadata = {
  title: '리그오브레전드 아이템 목록',
  description: '리그오브레전드의 아이템 목록을 표시합니다.',
  keywords: ['리그오브레전드', '리그오브레전드 아이템'],
};
const ItemPage = async () => {
  const items = await getItems();

  return (
    <section className='flex flex-wrap gap-8 h-full w-full mt-10 justify-center'>
      {items.map((item) => {
        return (
          <ItemCard
            key={item[0]}
            name={item[1].name}
            image={item[1].image.full}
            base={item[1].gold.base}
            sell={item[1].gold.sell}
            description={item[1].description}
          />
        );
      })}
    </section>
  );
};

export default ItemPage;
