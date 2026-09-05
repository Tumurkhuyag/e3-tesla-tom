export const CAL_NAMESPACE = "webdev20";
export const CAL_LINK = "oyuun-ord-zux113/webdev20";

/**
 * Cal.com-ийн embed скрипт эдгээр data-атрибуттай элементийг DOM-оос хайж
 * олоод дарахад pop-up цаг захиалгын цонхыг нээдэг.
 */
export const calButtonProps = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": JSON.stringify({
    layout: "month_view",
    useSlotsViewOnSmallScreen: "true",
  }),
} as const;
