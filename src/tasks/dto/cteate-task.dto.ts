export class CreateTaskDto {
  name!: string;
  status!: string;
  priority!: string;
  description!: string;
  dueDate!: Date;
  statusId!: number;
}
