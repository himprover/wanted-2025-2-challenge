"use client";

import { useRouter } from "next/navigation";
import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";

interface Props extends PropsWithChildren {
  url: string;
}

export function OpenLink({ children, url }: Props) {
  const router = useRouter();

  const clickHandler = () => {
    router.push(url);
  };

  if (isValidElement(children)) {
    return cloneElement(children as ReactElement, { onClick: clickHandler });
  }

  return children;
}
