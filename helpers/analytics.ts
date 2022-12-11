// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const googleAnalyticsTarget = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

if (!googleAnalyticsTarget) {
  throw new Error("googleAnalyticsTarget does not exist");
}
export const pageview = (url: string) => {
  window.gtag("config", googleAnalyticsTarget, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  readonly action: Gtag.EventNames | string;
  readonly category: Gtag.EventParams["event_category"];
  readonly label: Gtag.EventParams["event_label"];
  readonly value: Gtag.EventParams["value"];
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
