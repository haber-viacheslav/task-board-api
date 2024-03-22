import { ApiProperty } from "@nestjs/swagger";

class BaseTaskDto {
  @ApiProperty({ example: "Task Name", description: "Name of the task" })
  name!: string;

  @ApiProperty({ example: "In Process", description: "Status of the task" })
  status!: string;

  @ApiProperty({ example: "High", description: "Priority of the task" })
  priority!: string;

  @ApiProperty({
    example: "Task Description",
    description: "Description of the task",
  })
  description!: string;

  @ApiProperty({
    example: "2024-12-31T23:59:59",
    description: "Due date of the task",
  })
  dueDate!: Date;

  @ApiProperty({ example: 1, description: "ID of the status of the task" })
  statusId!: number;
}

export class CreateTaskDto extends BaseTaskDto {}

export class UpdateTaskDto extends BaseTaskDto {}
