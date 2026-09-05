import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type InputProps = Omit<ComponentProps<"input">, "id"> & {
  id: string;
  label: string;
  /** Сервер талаас ирсэн алдааны мессеж */
  error?: string;
};

export default function Input({ id, label, error, required, className, ...props }: InputProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-medium md:text-base">
        {label}
        {required && (
          <span className="text-danger" aria-hidden="true">
            {" *"}
          </span>
        )}
      </label>

      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full rounded-md border bg-white px-4 py-3 text-xs text-ink transition-colors md:text-base",
          "placeholder:text-ink/35",
          "focus:outline-2 focus:outline-offset-2 focus:outline-ink",
          error ? "border-danger" : "border-ink/15",
          className,
        )}
        {...props}
      />

      {error && (
        <p id={errorId} className="text-xs text-danger md:text-sm">
          {error}
        </p>
      )}
    </div>
  );
}
