import { Module } from "@nestjs/common";
import { AnalyticsEventModuleBase } from "./base/analyticsEvent.module.base";
import { AnalyticsEventService } from "./analyticsEvent.service";
import { AnalyticsEventController } from "./analyticsEvent.controller";
import { AnalyticsEventResolver } from "./analyticsEvent.resolver";

@Module({
  imports: [AnalyticsEventModuleBase],
  controllers: [AnalyticsEventController],
  providers: [AnalyticsEventService, AnalyticsEventResolver],
  exports: [AnalyticsEventService],
})
export class AnalyticsEventModule {}
