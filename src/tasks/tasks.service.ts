import { Injectable } from "@nestjs/common";
import { Task } from "@/models/tasks.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTaskDto, UpdateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskStore: typeof Task) {}

  async createTask(dto: CreateTaskDto): Promise<Task> {
    const task = await this.getTaskByName(dto.name);
    if (dto.name === task.name) {
      throw new Error(`Task with name ${dto.name} is found`);
    }
    return await this.taskStore.create(dto);
  }

  async getTasks(): Promise<Task[]> {
    return await this.taskStore.findAll();
  }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskStore.findByPk(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  }

  async getTaskByName(name: string): Promise<Task> {
    const task = await this.taskStore.findByPk(name);
    if (!task) {
      throw new Error(`Task with name ${name} not found`);
    }
    return task;
  }

  async updateTask(id: number, dto: UpdateTaskDto): Promise<Task> {
    const task = await this.getTaskById(id);
    await task.update({ ...dto, updatedAt: new Date() });
    return task.reload();
  }

  async deleteTask(id: number): Promise<object> {
    const task = await this.getTaskById(id);
    await task.destroy();
    return { message: "Task was deleted" };
  }
}
