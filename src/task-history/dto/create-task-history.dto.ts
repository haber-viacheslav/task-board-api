import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskHistoryDto {
  @ApiProperty({
    example: "name",
    description: "Name of the field that was changed",
  })
  fieldName!: string;

  @ApiProperty({ example: "old value", description: "Old value of the field" })
  oldValue!: string;

  @ApiProperty({ example: "new value", description: "New value of the field" })
  newValue!: string;

  @ApiProperty({
    example: "2024-04-01T16:26:51.389Z",
    description: "Date and time of the change",
  })
  createdAt!: Date;

  @ApiProperty({
    example: 1,
    description: "ID of the task associated with this history entry",
  })
  taskId?: number;
}
