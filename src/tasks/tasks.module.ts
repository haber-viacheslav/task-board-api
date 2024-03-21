import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Task } from "@/models/tasks.model";
@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [SequelizeModule.forFeature([Task])],
})
export class TasksModule {}
