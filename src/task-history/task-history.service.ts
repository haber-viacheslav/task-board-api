import { Injectable } from "@nestjs/common";
import { TaskHistory } from "@/models/task-history.model";
import { InjectModel } from "@nestjs/sequelize";
import { Task } from "@/models/tasks.model";

@Injectable()
export class TaskHistoryService {
  constructor(
    @InjectModel(TaskHistory)
    private taskHistoryStore: typeof TaskHistory,
  ) {}

  async getAllTaskHistory(): Promise<TaskHistory[]> {
    return await this.taskHistoryStore.findAll();
  }
  async logTaskCreation(newTaskData: Task): Promise<void> {
    const { name, status } = newTaskData;
    await this.taskHistoryStore.create({
      fieldName: name,
      oldValue: name,
      newValue: status,
      createdAt: new Date(),
      action: "POST",
      taskId: 2,
    });
  }
  async logTaskUpdate(
    taskId: number,
    fieldName: string,
    oldValue: string,
    newValue: string,
  ): Promise<void> {
    await this.taskHistoryStore.create({
      fieldName: fieldName,
      oldValue: oldValue,
      newValue: newValue,
      createdAt: new Date(),
      taskId,
      action: "PUT",
    });
  }

  async logTaskDeletion(taskId: number, deletedTaskData: any): Promise<void> {
    await this.taskHistoryStore.create({
      fieldName: "",
      oldValue: JSON.stringify(deletedTaskData),
      newValue: "",
      createdAt: new Date(),
      taskId,
      action: "DELETE",
    });
  }
}
