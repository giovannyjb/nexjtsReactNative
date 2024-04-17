import { IPostmanRepository } from "@shared/domain/repositories/postman.repository";
import { ContainerModule, interfaces } from "inversify";
import { REPOSITORY_TYPES } from "./repository.types";
import PostmanRepositoryImplement from "@shared/infrastructure/data/postman.implement";

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IPostmanRepository>(REPOSITORY_TYPES._PostmanRepository).to(
    PostmanRepositoryImplement
  );
});
