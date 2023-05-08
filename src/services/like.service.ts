import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Service } from '@prisma/client';

@Injectable()
export class LikeService {
    constructor(private prismaService: PrismaService) { }

    async addLike(id: string): Promise<Service> {
        const service = await this.prismaService.service.findFirst({
            where: { id }
        });

        return this.prismaService.service.update({
            where: { id },
            data: {
                likes: service.likes + 1,
                update_at: new Date()
            },
        });
    }

    async dislike(id: string): Promise<Service> {
        const service = await this.prismaService.service.findFirst({
            where: { id }
        });

        return this.prismaService.service.update({
            where: { id },
            data: {
                dislikes: service.dislikes + 1,
                update_at: new Date()
            },
        });
    }
}
