import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { TaskListsService } from "./task-lists.service";
import { TaskListsController } from "./task-lists.controller";
import { TaskList } from "@/models/task-lists.model";

@Module({
  providers: [TaskListsService],
  controllers: [TaskListsController],
  imports: [SequelizeModule.forFeature([TaskList])],
})
export class TaskListsModule {}
