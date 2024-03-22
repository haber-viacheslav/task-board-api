import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  NotFoundException,
} from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import {
  CreateTaskListDto,
  UpdateTaskListDto,
} from "./dto/create-taskList.dto";
import { TaskListsService } from "./task-lists.service";
import { TaskList } from "@/models/task-lists.model";

@Controller("api/task_lists")
export class TaskListsController {
  constructor(private taskListsService: TaskListsService) {}

  @ApiOperation({ summary: "Create task list" })
  @ApiResponse({ status: 200, type: TaskList })
  @Post()
  async create(@Body() taskListDto: CreateTaskListDto) {
    const taskList = await this.taskListsService.createTaskList(taskListDto);
    return taskList;
  }
  @ApiOperation({ summary: "Get one task list" })
  @ApiResponse({ status: 200, type: TaskList })
  @Get(":id")
  async findOne(@Param("id") id: string) {
    const taskList = await this.taskListsService.getTaskListById(Number(id));
    if (!taskList) {
      throw new NotFoundException(`Task list with ID ${id} not found`);
    }
    return taskList;
  }
  @ApiOperation({ summary: "Get all task list" })
  @ApiResponse({ status: 200, type: [TaskList] })
  @Get()
  async findAll() {
    return this.taskListsService.getTaskList();
  }

  @ApiOperation({ summary: "Change task list" })
  @ApiResponse({ status: 200, type: TaskList })
  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateTaskListDto: UpdateTaskListDto,
  ) {
    return this.taskListsService.updateTaskList(Number(id), updateTaskListDto);
  }
  @ApiOperation({ summary: "Delete task list" })
  @ApiResponse({ status: 200, type: "task list was deleted" })
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.taskListsService.deleteTaskList(Number(id));
  }
}
