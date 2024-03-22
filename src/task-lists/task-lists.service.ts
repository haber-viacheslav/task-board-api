import { Injectable } from "@nestjs/common";
import { TaskList } from "@/models/task-lists.model";
import { InjectModel } from "@nestjs/sequelize";
import {
  CreateTaskListDto,
  UpdateTaskListDto,
} from "./dto/create-taskList.dto";
@Injectable()
export class TaskListsService {
  constructor(@InjectModel(TaskList) private taskListStore: typeof TaskList) {}
  async createTaskList(dto: CreateTaskListDto): Promise<TaskList> {
    return await this.taskListStore.create(dto);
  }

  async getTaskList(): Promise<TaskList[]> {
    return await this.taskListStore.findAll();
  }

  async getTaskListById(id: number): Promise<TaskList> {
    const taskList = await this.taskListStore.findByPk(id);
    if (!taskList) {
      throw new Error(`Task list with id ${id} not found`);
    }
    return taskList;
  }

  async updateTaskList(id: number, dto: UpdateTaskListDto): Promise<TaskList> {
    const taskList = await this.getTaskListById(id);
    await taskList.update(dto);
    return taskList.reload();
  }

  async deleteTaskList(id: number): Promise<string> {
    const taskList = await this.getTaskListById(id);
    await taskList.destroy();
    return "task list was deleted";
  }
}
