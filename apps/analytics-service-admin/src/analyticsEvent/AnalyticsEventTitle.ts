import { AnalyticsEvent as TAnalyticsEvent } from "../api/analyticsEvent/AnalyticsEvent";

export const ANALYTICSEVENT_TITLE_FIELD = "id";

export const AnalyticsEventTitle = (record: TAnalyticsEvent): string => {
  return record.id?.toString() || String(record.id);
};
