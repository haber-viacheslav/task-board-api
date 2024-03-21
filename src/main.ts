import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
  const PORT = process.env.Port || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
start();
