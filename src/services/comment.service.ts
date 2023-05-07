import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ServiceResponseDTO } from '@/core/adapters/service.response.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(id: string, text: string): Promise<ServiceResponseDTO> {
    return this.prisma.service.update({
      where: { id },
      data: {
        comments: {
          create: {
            text,
          },
        },
      },
      include: {
        comments: true,
      },
    });
  }

  async getAllByService(serviceId: string): Promise<ServiceResponseDTO> {
    return this.prisma.comment.findMany({
      where: { serviceId: serviceId }
    });
  }
}
