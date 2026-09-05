import Image from "next/image";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex h-[700px] items-start justify-center overflow-hidden px-5 pt-12 md:h-[683px] md:px-16">
      <Image
        src="/assets/header.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex w-full max-w-3xl flex-col items-center gap-5 text-center text-white md:gap-7">
        <div className="flex w-full flex-col items-center gap-3 md:gap-2">
          <h1 className="font-ui text-[2.5rem] leading-[1.2] font-medium md:text-5xl">Model 3</h1>
          <p className="font-ui text-xs leading-[1.2] underline md:text-xl">
            1.99% APR Available
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Button variant="light">Яг одоо захиалах</Button>
          <Button variant="outline">Дэлгэрэнгүй үзэх</Button>
        </div>
      </div>
    </section>
  );
}
