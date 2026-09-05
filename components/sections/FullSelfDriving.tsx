import Image from "next/image";

import Button from "@/components/ui/Button";
import { ChevronRightIcon } from "@/components/ui/icons";

const stats = [
  { value: "7x", label: "Fewer Collisions" },
  { value: "13,534,294,722", label: "Fewer Collisions" },
];

export default function FullSelfDriving() {
  return (
    <section className="page-x section-y flex justify-center bg-mist">
      <div className="flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-20">
        <div className="flex w-full min-w-0 flex-col gap-6 md:flex-1 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="mb-5 text-display-sm font-medium md:mb-6 md:text-display">
              Full Self-Driving (Supervised)
            </h2>

            <p className="text-xs md:text-lg">
              Makes every drive easier. Subscribe for $99/mo.<sup>1</sup>
            </p>

            <dl className="mt-6 flex flex-col gap-6 py-2 md:mt-8 md:flex-row">
              {stats.map((stat) => (
                <div key={stat.label + stat.value} className="min-w-0 md:flex-1">
                  <dd className="mb-2 text-display-sm font-medium md:text-display">{stat.value}</dd>
                  <dt className="text-xs md:text-base">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-center gap-6">
            <Button variant="outlineDark">Демо үзэх цаг авах</Button>
            <Button variant="link">
              Дэлгэрэнгүй танилцах
              <span className="flex size-6 shrink-0 items-center justify-center">
                <ChevronRightIcon />
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full min-w-0 overflow-hidden rounded-lg md:flex-1">
          <Image
            src="/assets/placeholder.png"
            alt="Full Self-Driving"
            width={1684}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-3/2 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
