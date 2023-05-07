import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ServiceRequestDTO } from '@/core/adapters/service.request.dto';
import { ServiceResponseDTO } from '@/core/adapters/service.response.dto';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async create(
    serviceRequestDTO: ServiceRequestDTO,
  ): Promise<ServiceResponseDTO> {
    return this.prisma.service.create({
      data: serviceRequestDTO,
    });
  }

  async getAll(): Promise<ServiceResponseDTO[]> {
    return this.prisma.service.findMany({
      // include: {
      //   comments: true,
      // },
    });
  }

  async getOne(id: string): Promise<ServiceResponseDTO> {
    return this.prisma.service.findUnique({
      where: { id },
      include: {
        comments: true,
      },
    });
  }

  async update(
    id: string,
    serviceRequestDTO: ServiceRequestDTO,
  ): Promise<ServiceResponseDTO> {
    const service = await this.prisma.service.findUnique({
      where: { id },
    });

    return this.prisma.service.update({
      where: { id },
      data: {
        name: serviceRequestDTO.name ?? service.name,
        description: serviceRequestDTO.description ?? service.description,
        price: serviceRequestDTO.price ?? service.price,
      },
    });
  }

  async delete(id: string): Promise<ServiceResponseDTO> {
    return this.prisma.service.delete({
      where: { id },
    });
  }
}
