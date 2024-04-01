import { Module } from "@nestjs/common";
import { TaskHistoryController } from "./task-history.controller";
import { TaskHistoryService } from "./task-history.service";
import { TaskHistory } from "../models/task-history.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [TaskHistoryController],
  providers: [TaskHistoryService],
  imports: [SequelizeModule.forFeature([TaskHistory])],
  exports: [TaskHistoryService],
})
export class TaskHistoryModule {}
