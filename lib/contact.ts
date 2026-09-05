export const contactFieldNames = ["name", "email", "phone"] as const;

export type ContactField = (typeof contactFieldNames)[number];

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message?: string;
  /** Талбар тус бүрийн алдаа */
  errors?: Partial<Record<ContactField, string>>;
  /** Алдаа гарсан үед бөглөсөн утгыг нь буцааж хадгална */
  values?: Partial<Record<ContactField, string>>;
  /** Амжилттай илгээлт бүрт нэмэгдэнэ — формыг цэвэрлэх key болж ажиллана */
  sentCount: number;
};

export const initialContactState: ContactFormState = { status: "idle", sentCount: 0 };

/**
 * Сервер тал дээр ажилладаг шалгалт — JS унтарсан үед ч энэ л эцсийн шүүлтүүр.
 */
export function validateContact(values: Record<ContactField, string>) {
  const errors: Partial<Record<ContactField, string>> = {};

  if (values.name.length < 2) {
    errors.name = "Нэрээ бүтэн бичнэ үү.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "Имэйл хаягаа зөв оруулна уу.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 6) {
    errors.phone = "Утасны дугаараа зөв оруулна уу.";
  }

  return errors;
}
