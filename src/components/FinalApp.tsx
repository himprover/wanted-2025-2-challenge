import { Suspense } from "react";
import { ItemList } from "./ItemList";

function FinalApp() {
  return (
    <div>
      <div>
        <span>미니멀 스타일 브랜드 아이템 추천</span>
        <a href="https://~~~~~~~" target="_blank">
          더보기
        </a>
      </div>
      <Suspense fallback={<span>로딩중</span>}>
        <ItemList />
      </Suspense>
    </div>
  );
}
