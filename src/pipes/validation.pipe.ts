import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  Type,
} from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/validation.exception";

@Injectable()
export class ValidationPipe<T extends object> implements PipeTransform<T> {
  async transform(value: T, metadata: ArgumentMetadata): Promise<T> {
    const obj = plainToClass(metadata.metatype as Type<T>, value);
    const errors = await validate(obj);

    if (errors.length) {
      const messages = errors.map((err) => {
        if (err.constraints) {
          return `${err.property} - ${Object.values(err.constraints).join(", ")}`;
        } else {
          return `${err.property} - No constraints defined`;
        }
      });
      throw new ValidationException(messages);
    }
    return value;
  }
}
