import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
class BaseTaskListDto {
  @ApiProperty({ example: "In Process", description: "Task list name" })
  @IsString({ message: "Must be a string" })
  listName!: string;
}

export class CreateTaskListDto extends BaseTaskListDto {}

export class UpdateTaskListDto extends BaseTaskListDto {}
