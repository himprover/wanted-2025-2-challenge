import { RSC } from "@/components/RSC";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<span>loading 10</span>}>
        <RSC num={10} />
      </Suspense>
      <Suspense fallback={<span>loading 20</span>}>
        <RSC num={20} sleepMs={2000} />
      </Suspense>
      <Suspense fallback={<span>loading 30</span>}>
        <RSC num={30} sleepMs={4000} />
      </Suspense>
    </div>
  );
}
