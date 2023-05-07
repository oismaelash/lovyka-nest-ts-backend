import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ServiceResponseDTO } from '@/core/adapters/service.response.dto';

@Injectable()
export class LikeService {
  constructor(private prisma: PrismaService) {}

  async addLike(id: string): Promise<ServiceResponseDTO> {
    const service = await this.prisma.service.findUnique({
      where: { id },
    });

    return this.prisma.service.update({
      where: { id },
      data: {
        likes: service.likes + 1,
      },
    });
  }

  async removeLike(id: string): Promise<ServiceResponseDTO> {
    const service = await this.prisma.service.findUnique({
      where: { id },
    });

    return this.prisma.service.update({
      where: { id },
      data: {
        dislikes: service.dislikes + 1,
      },
    });
  }
}
