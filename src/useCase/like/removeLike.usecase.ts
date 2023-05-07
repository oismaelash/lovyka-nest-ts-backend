import {
  errorResponse,
  HttpResponse,
  successResponse,
} from '../../helpers/contracts';
import { UseCase } from '@/helpers/useCase';
import { Injectable } from '@nestjs/common';
import { ServiceAxios } from '../../services/service';
import { ServiceRequestDTO } from '@/core/adapters/service.request.dto';

@Injectable()
export class RemoveLikeUseCase implements UseCase {
  constructor(private readonly service: ServiceAxios) {}

  async handle(service: ServiceRequestDTO): Promise<HttpResponse> {
    try {
      const result = await this.service.get(config);
      return successResponse(result.data);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
