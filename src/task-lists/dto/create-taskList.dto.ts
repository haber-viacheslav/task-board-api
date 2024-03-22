import { ApiProperty } from "@nestjs/swagger";

class BaseTaskListDto {
  @ApiProperty({ example: "In Process", description: "Task list name" })
  listName!: string;
}

export class CreateTaskListDto extends BaseTaskListDto {}

export class UpdateTaskListDto extends BaseTaskListDto {}
