import { Item as ItemProps } from "./BrandItemRecommend";
import { Item } from "./Item";
import { OpenLink } from "./OpenLink";

export async function ItemList() {
  const response = await fetch("https:~~~~~");
  const data: ItemProps[] = await response.json();

  return (
    <div>
      {data.length === 0 && <span>상품이 존재하지 않아요.</span>}
      {data.map((item) => (
        <OpenLink key={item.id} url={`https://~~~~/${item.id}`}>
          <Item {...item} />
        </OpenLink>
      ))}
    </div>
  );
}
