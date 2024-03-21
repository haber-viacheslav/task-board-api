import { Module } from '@nestjs/common';
import { TaskListsService } from './task-lists.service';
import { TaskListsController } from './task-lists.controller';

@Module({
  providers: [TaskListsService],
  controllers: [TaskListsController]
})
export class TaskListsModule {}
