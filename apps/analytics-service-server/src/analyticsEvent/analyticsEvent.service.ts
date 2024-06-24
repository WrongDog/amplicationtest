import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsEventServiceBase } from "./base/analyticsEvent.service.base";

@Injectable()
export class AnalyticsEventService extends AnalyticsEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
