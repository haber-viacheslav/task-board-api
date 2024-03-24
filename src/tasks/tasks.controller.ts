import {
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Body,
  NotFoundException,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { TasksService } from "./tasks.service";
import { Task } from "@/models/tasks.model";
import { CreateTaskDto, UpdateTaskDto } from "./dto/create-task.dto";

@ApiTags("Tasks")
@Controller("api/tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: "Create task" })
  @ApiResponse({ status: 200, type: Task })
  @Post()
  async create(@Body() taskDto: CreateTaskDto) {
    const task = await this.tasksService.createTask(taskDto);
    return task;
  }

  @ApiOperation({ summary: "Get one task" })
  @ApiResponse({ status: 200, type: Task })
  @Get(":id")
  async findOne(@Param("id") id: string) {
    const task = await this.tasksService.getTaskById(Number(id));
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  @ApiOperation({ summary: "Get all tasks" })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  async findAll() {
    return this.tasksService.getTasks();
  }

  @ApiOperation({ summary: "Update task" })
  @ApiResponse({ status: 200, type: Task })
  @Put(":id")
  async update(@Param("id") id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(Number(id), updateTaskDto);
  }

  @ApiOperation({ summary: "Delete task" })
  @ApiResponse({ status: 200, type: "Task was deleted" })
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.tasksService.deleteTask(Number(id));
  }
}
