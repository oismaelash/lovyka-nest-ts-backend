import { Module } from '@nestjs/common';
import { ServiceController } from './controllers/service.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { ServiceService } from '../services/service.service';
import { GetAllServiceUseCase } from '../useCase/service/getAllService.usecase';
import { GetOneServiceUseCase } from '../useCase/service/getOneService.usecase';
import { UpdateServiceUseCase } from '../useCase/service/updateService.usecase';
import { DeleteServiceUseCase } from '../useCase/service/deleteService.usecase';
import { CreateServiceUseCase } from '../useCase/service/createService.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceController],
  providers: [
    PrismaService,
    ServiceService,
    CreateServiceUseCase,
    GetAllServiceUseCase,
    GetOneServiceUseCase,
    UpdateServiceUseCase,
    DeleteServiceUseCase,
  ],
})
export class ServiceModule {}
