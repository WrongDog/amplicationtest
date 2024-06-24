import { AnalyticsEventWhereInput } from "./AnalyticsEventWhereInput";
import { AnalyticsEventOrderByInput } from "./AnalyticsEventOrderByInput";

export type AnalyticsEventFindManyArgs = {
  where?: AnalyticsEventWhereInput;
  orderBy?: Array<AnalyticsEventOrderByInput>;
  skip?: number;
  take?: number;
};
