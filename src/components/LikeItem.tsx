"use client";

import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  itemId: number;
  isLike: boolean;
}

export function LikeItem({ itemId, isLike, children }: Props) {
  const likeHandler = async () => {
    fetch(`https://api.~~~~/like/${itemId}`, { method: "PATCH" });
  };

  return (
    <div className="relative">
      {children}
      <button onClick={likeHandler} className="absolute right-5 bottom-5">
        {isLike}
      </button>
    </div>
  );
}
