import {
  errorResponse,
  HttpResponse,
  successResponse,
} from '../../helpers/contracts';
import { UseCase } from '../../helpers/useCase';
import { ServiceService } from '../../services/service.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetOneServiceUseCase implements UseCase {
  constructor(private readonly serviceService: ServiceService) {}

  async handle(serviceId: string): Promise<HttpResponse> {
    try {
      const result = await this.serviceService.getOne(serviceId)
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
