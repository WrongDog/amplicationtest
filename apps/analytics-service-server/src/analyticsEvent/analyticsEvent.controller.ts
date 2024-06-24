import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalyticsEventService } from "./analyticsEvent.service";
import { AnalyticsEventControllerBase } from "./base/analyticsEvent.controller.base";

@swagger.ApiTags("analyticsEvents")
@common.Controller("analyticsEvents")
export class AnalyticsEventController extends AnalyticsEventControllerBase {
  constructor(protected readonly service: AnalyticsEventService) {
    super(service);
  }
}
