/* eslint-disable @next/next/no-img-element */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface Item {
  id: number;
  imgUrl: string;
  brand: string;
  name: string;
  price: number;
  discountPercent: number | null;
}

export function BrandItemRecommend() {
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  const fetchItems = async () => {
    const response = await fetch("https:~~~~~");
    const data: Item[] = await response.json();

    setItems(data);
  };

  const clickHandler = (id: number) => {
    router.push(`https://~~~~/${id}`);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div>
        <span>미니멀 스타일 브랜드 아이템 추천</span>
        <a href="https://~~~~~~~" target="_blank">
          더보기
        </a>
      </div>
      <div>
        {items.length === 0 && "상품이 존재하지 않아요."}
        {items.map((item) => (
          <div key={item.id} onClick={() => clickHandler(item.id)}>
            <img src={item.imgUrl} alt="" />
            <span>{item.brand}</span>
            <span>{item.name}</span>
            <span>{item.discountPercent}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
