import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";

const links = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];

export default function Navbar() {
  return (
    <header className="flex h-16 items-center bg-white pr-3 pl-5 md:h-14 md:px-16">
      <div className="flex w-full items-center gap-4 md:gap-8">
        <div className="flex-none md:flex-1">
          <Image src="/assets/logo.jpg" alt="Tesla" width={121} height={16} priority />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((label) => (
            <Link
              key={label}
              href="#"
              className="font-ui text-sm font-medium whitespace-nowrap text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex flex-none justify-end md:ml-0 md:flex-1">
          <Button variant="dark" booking>
            Жолоодож үзэх
          </Button>
        </div>
      </div>
    </header>
  );
}
