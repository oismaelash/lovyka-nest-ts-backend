import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CommentRequestDTO } from '../core/dtos';
import { Service } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  async create(serviceId: string, commentRequestDTO: CommentRequestDTO): Promise<Service> {
    const result = await this.prismaService.service.update({
        where: {
            id: serviceId
        },
        data: {
            comments: {
                create: {
                    text: commentRequestDTO.text
                }
            },
            update_at: new Date()
        },
      })
  
      return result
  }

  async getAllByService(serviceId: string): Promise<Service> {
    const result = await this.prismaService.service.findFirst({
        where: {
            id: serviceId
        },
        include: {
            comments: true
        },
    })
  
      return result
  }
}
