import * as graphql from "@nestjs/graphql";
import { AnalyticsEventResolverBase } from "./base/analyticsEvent.resolver.base";
import { AnalyticsEvent } from "./base/AnalyticsEvent";
import { AnalyticsEventService } from "./analyticsEvent.service";

@graphql.Resolver(() => AnalyticsEvent)
export class AnalyticsEventResolver extends AnalyticsEventResolverBase {
  constructor(protected readonly service: AnalyticsEventService) {
    super(service);
  }
}
