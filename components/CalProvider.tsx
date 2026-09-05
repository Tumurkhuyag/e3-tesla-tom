"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import { CAL_NAMESPACE } from "@/lib/cal";

/**
 * Cal.com embed-ийг нэг удаа ачаалж тохируулна. Дарахад нээгдэх товчнуудыг
 * скрипт өөрөө data-cal-* атрибутаар нь олох тул энд юу ч render хийхгүй.
 */
export default function CalProvider() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });

      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

      // Хуудасны query параметрүүдийг (utm_*, гэх мэт) захиалгын формд дамжуулах
      const globalCal = (window as unknown as { Cal?: { config?: Record<string, unknown> } }).Cal;
      if (globalCal) {
        globalCal.config = { ...globalCal.config, forwardQueryParams: true };
      }
    })();
  }, []);

  return null;
}
