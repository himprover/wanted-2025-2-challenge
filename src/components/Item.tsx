/* eslint-disable @next/next/no-img-element */
import { Item as ItemProps } from "./BrandItemRecommend";

export function Item(item: ItemProps) {
  return (
    <div>
      <img src={item.imgUrl} alt="" />
      <span>{item.brand}</span>
      <span>{item.name}</span>
      <span>{item.discountPercent}</span>
      <span>{item.price}</span>
    </div>
  );
}
