import { BadRequestException, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, Prisma, Role } from '@prisma/client'
import { getGravatarUrl, hashPassword } from './api-core-data-access.helper'

@Injectable()
export class ApiCoreDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async onModuleInit() {
    await this.$connect()
  }

  async createUser(input: Partial<Prisma.UserCreateInput>) {
    const email = input.email.trim()
    const existing = await this.findUserByEmail(email)
    if (existing) {
      throw new BadRequestException(`Can't create user with email ${email}`)
    }
    const password = hashPassword(input.password)

    // The first user will get the Admin role
    const hasAdmin = await this.user.count({ where: { role: 'Admin' } })
    const role = hasAdmin ? 'User' : 'Admin'

    return this.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email,
        username: email,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password,
        role,
      },
    })
  }

  findUserByEmail(email: string) {
    return this.user.findUnique({ where: { email } })
  }

  findUserById(userId: string) {
    return this.user.findUnique({ where: { id: userId } })
  }

  findUserByUsername(username: string) {
    return this.user.findUnique({ where: { username } })
  }

  async ensureAdminUser(adminId: string): Promise<boolean> {
    const tenant = await this.findUserById(adminId)
    if (tenant.role !== Role.Admin) {
      throw new Error(`This operation needs Admin access`)
    }
    return true
  }
}
