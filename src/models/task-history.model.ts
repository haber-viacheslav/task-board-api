import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface ITaskHistoryAttrs {
  fieldName: string;
  oldValue: string;
  newValue: string;
  createdAt: Date;
  action: string;
  taskId: number;
}

@Table({ tableName: "task_history" })
export class TaskHistory extends Model<TaskHistory, ITaskHistoryAttrs> {
  @ApiProperty({ example: 1, description: "unique autogenerated ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: "name",
    description: "name of the field that was changed",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fieldName!: string;

  @ApiProperty({ example: "old value", description: "old value of the field" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  oldValue!: string;

  @ApiProperty({ example: "new value", description: "new value of the field" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  newValue!: string;

  @ApiProperty({
    example: "2024-03-22 15:19:49.732+02",
    description: "date and time of the change",
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt!: Date;

  @Column
  taskId?: number;
  @Column
  action!: string;
}
