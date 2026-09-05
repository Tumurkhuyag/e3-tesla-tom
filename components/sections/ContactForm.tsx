"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitContact } from "@/app/actions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { initialContactState, type ContactField } from "@/lib/contact";
import { cn } from "@/lib/utils";

const fields: {
  name: ContactField;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  inputMode?: "email" | "tel";
}[] = [
  {
    name: "name",
    label: "Харилцагчийн нэр",
    type: "text",
    autoComplete: "name",
    placeholder: "Бат-Эрдэнэ",
  },
  {
    name: "email",
    label: "Имэйл",
    type: "email",
    autoComplete: "email",
    placeholder: "bat@example.com",
    inputMode: "email",
  },
  {
    name: "phone",
    label: "Утасны дугаар",
    type: "tel",
    autoComplete: "tel",
    placeholder: "9911 2233",
    inputMode: "tel",
  },
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="solid" disabled={pending}>
      {pending ? "Илгээж байна…" : "Хүсэлт илгээх"}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialContactState);
  const feedbackRef = useRef<HTMLParagraphElement>(null);

  // Хариу ирмэгц фокусыг мессеж рүү аваачна — гараас ажилладаг хэрэглэгч
  // болон дэлгэц уншигч алдаа/амжилтыг шууд мэдэрнэ.
  useEffect(() => {
    if (state.status !== "idle") {
      feedbackRef.current?.focus();
    }
  }, [state]);

  const isError = state.status === "error";

  return (
    <div className="rounded-lg bg-mist p-6 md:p-12">
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h3 className="text-heading-sm font-medium md:text-heading">Хүсэлт үлдээх</h3>
          <p className="mt-3 text-xs md:mt-4 md:text-base">
            Мэдээллээ үлдээгээрэй — бид ажлын нэг хоногт багтаан холбогдоно.
          </p>
        </div>

        {state.status !== "idle" && (
          <p
            ref={feedbackRef}
            tabIndex={-1}
            role={isError ? "alert" : "status"}
            className={cn(
              "rounded-md border bg-white px-4 py-3 text-xs md:text-base",
              "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
              isError ? "border-danger text-danger" : "border-ink/15",
            )}
          >
            {state.message}
          </p>
        )}

        {/* Амжилттай илгээх бүрд key солигдож, форм шинэчлэгдэн талбарууд цэвэрлэгдэнэ */}
        <form key={state.sentCount} action={formAction} noValidate>
          <div className="grid gap-6 md:grid-cols-3">
            {fields.map((field) => (
              <Input
                key={field.name}
                id={`contact-${field.name}`}
                name={field.name}
                label={field.label}
                type={field.type}
                inputMode={field.inputMode}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                defaultValue={state.values?.[field.name] ?? ""}
                error={state.errors?.[field.name]}
                required
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <SubmitButton />
            <p className="text-xs text-ink/60 md:text-sm">
              <span className="text-danger" aria-hidden="true">
                *
              </span>{" "}
              Заавал бөглөх талбар.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
