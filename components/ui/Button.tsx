import type { ComponentProps } from "react";

import { calButtonProps } from "@/lib/cal";
import { cn } from "@/lib/utils";

/**
 * Хувилбар бүр өөрийн өнгө, хэмжээг бүрэн тодорхойлно — загварт товч бүр
 * тодорхой нэг контекстэд (navbar / hero / FSD) л хэрэглэгддэг.
 */
const variants = {
  dark: "border-black bg-black px-5 py-1 font-ui text-xs text-white md:py-2 md:text-sm",
  light: "border-white bg-white px-6 py-2.5 font-ui text-xs text-ink md:text-sm",
  outline: "border-white/20 px-6 py-2.5 text-xs text-white md:text-sm",
  outlineDark: "border-ink/15 px-6 py-2.5 text-xs text-ink md:text-base",
  link: "border-transparent px-0 py-2.5 text-xs text-ink md:text-base",
} as const;

type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  /** Дарахад Cal.com-ийн цаг захиалгын pop-up нээнэ */
  booking?: boolean;
};

export default function Button({
  variant = "dark",
  booking = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border font-medium whitespace-nowrap",
        variants[variant],
        className,
      )}
      {...(booking ? calButtonProps : {})}
      {...props}
    />
  );
}
