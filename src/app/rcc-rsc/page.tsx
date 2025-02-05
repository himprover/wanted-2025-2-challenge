import { RCC } from "@/components/RCC";
import { RSC } from "@/components/RSC";

export default function Page() {
  return (
    <div>
      <section id="rsc">
        <RSC num={3} />
      </section>
      <section id="rcc">
        <RCC num={4} />
      </section>
    </div>
  );
}
