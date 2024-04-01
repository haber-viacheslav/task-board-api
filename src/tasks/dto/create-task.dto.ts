import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsNumber } from "class-validator";
class BaseTaskDto {
  @ApiProperty({ example: "Task Name", description: "Name of the task" })
  @IsString({ message: "Must be a string" })
  name!: string;

  @ApiProperty({ example: "In Process", description: "Status of the task" })
  @IsString({ message: "Must be a string" })
  status!: string;

  @ApiProperty({ example: "High", description: "Priority of the task" })
  @IsString({ message: "Must be a string" })
  priority!: string;

  @ApiProperty({
    example: "Task Description",
    description: "Description of the task",
  })
  @Length(0, 500, { message: "Should not be more than 500 characters" })
  @IsString({ message: "Must be a string" })
  description!: string;

  @ApiProperty({
    example: "2024-04-01T16:26:51.389Z",
    description: "Due date of the task",
  })
  @IsString({ message: "Must be a string" })
  dueDate!: string;

  @ApiProperty({ example: 1, description: "ID of the status of the task" })
  @IsNumber({}, { message: "Must be a number" })
  statusId!: number;
}

export class CreateTaskDto extends BaseTaskDto {}

export class UpdateTaskDto {
  @ApiProperty({ example: "Task Name", description: "Name of the task" })
  name?: string;

  @ApiProperty({ example: "In Process", description: "Status of the task" })
  status?: string;

  @ApiProperty({ example: "High", description: "Priority of the task" })
  priority?: string;

  @ApiProperty({
    example: "Task Description",
    description: "Description of the task",
  })
  @Length(0, 500, { message: "Should not be more than 500 characters" })
  description?: string;

  @ApiProperty({
    example: "2024-04-01T16:26:51.389Z",
    description: "Due date of the task",
  })
  dueDate?: string;

  @ApiProperty({ example: 1, description: "ID of the status of the task" })
  statusId?: number;

  @ApiProperty({
    example: "2024-12-31T23:59:59",
    description: "update the task",
  })
  updatedAt!: Date;
}
