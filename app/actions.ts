"use server";

import {
  contactFieldNames,
  validateContact,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact";

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = Object.fromEntries(
    contactFieldNames.map((field) => [field, String(formData.get(field) ?? "").trim()]),
  ) as Record<ContactField, string>;

  const errors = validateContact(values);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Мэдээллээ шалгаад дахин илгээнэ үү.",
      errors,
      values,
      sentCount: _prevState.sentCount,
    };
  }

  // TODO: хүсэлтийг имэйлээр илгээх / CRM, өгөгдлийн санд хадгалах логикоо энд залгана.
  // Одоогоор хаашаа ч илгээгдэхгүй, зөвхөн шалгалт хийгээд амжилттай гэж хариулж байгаа.

  return {
    status: "success",
    message: `Баярлалаа, ${values.name}! Бид ажлын нэг хоногт багтаан ${values.phone} дугаараар холбогдоно.`,
    sentCount: _prevState.sentCount + 1,
  };
}
