import {
  errorResponse,
  HttpResponse,
  successResponse,
} from '../../helpers/contracts';
import { UseCase } from '../../helpers/useCase';
import { Injectable } from '@nestjs/common';
import { ServiceService } from '../../services/service.service';

@Injectable()
export class GetAllServiceUseCase implements UseCase {
  constructor(private readonly service: ServiceService) {}

  async handle(): Promise<HttpResponse> {
    try {
      const result = await this.service.getAll()
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
