import type { IPostmanRepository } from "@shared/domain/repositories/postman.repository";
import { REPOSITORY_TYPES } from "@shared/infrastructure/ioc/containers/repositories/repository.types";
import { inject, injectable } from "inversify";

@injectable()
export default class CreatePostmanUseCase {
  private postmanRepository: IPostmanRepository;

  constructor(
    @inject(REPOSITORY_TYPES._PostmanRepository)
    postmanRepository: IPostmanRepository
  ) {
    this.postmanRepository = postmanRepository;
  }

  async execute({ data }: { data?: any }): Promise<any> {
    const request = await this.postmanRepository
      .create(data)
      .catch((error) => error);
    if (request instanceof Error) {
      return;
    }

    return request;
  }
}
