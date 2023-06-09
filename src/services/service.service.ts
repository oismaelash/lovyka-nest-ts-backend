import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ServiceRequestDTO } from '../core/dtos/service.request.dto';
import { Service } from '@prisma/client';

@Injectable()
export class ServiceService {
  constructor(private prismaService: PrismaService) { }

  async create(
    serviceRequestDTO: ServiceRequestDTO,
  ): Promise<Service> {
    const result = await this.prismaService.service.create({
      data: {
        name: serviceRequestDTO.name,
        description: serviceRequestDTO.description,
        price: serviceRequestDTO.price,
        author: serviceRequestDTO.author
      }
    })

    return result
  }

  async getAll(): Promise<Service[]> {
    return this.prismaService.service.findMany({
      orderBy: {
        update_at: 'desc'
      }
    })
  }

  async getOne(id: string): Promise<Service> {
    return this.prismaService.service.findFirst({
      where: {
        id: id
      },
      include: {
        comments: true
      }
    })
  }

  async update(
    id: string,
    serviceRequestDTO: ServiceRequestDTO,
  ): Promise<Service> {
    return this.prismaService.service.update({
      where: { id },
      data: {
        ...serviceRequestDTO
      }
    });
  }

  async delete(id: string): Promise<Service> {
    return this.prismaService.service.delete({
      where: {
        id: id
      }
    })
  }
}
