import { Controller, Get } from "@nestjs/common";
import { TaskHistoryService } from "./task-history.service";
import { TaskHistory } from "@/models/task-history.model";

@Controller("api/task-history")
export class TaskHistoryController {
  constructor(private taskHistoryService: TaskHistoryService) {}

  @Get()
  async getAllTaskHistory(): Promise<TaskHistory[]> {
    return this.taskHistoryService.getAllTaskHistory();
  }
}
