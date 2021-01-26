import { Resolver } from '@nestjs/graphql'
import {
  ApiCoreDataAccessService,
  CorePaging,
  CorePagingInput,
  getGravatarUrl,
  hashPassword,
  uniqueSuffix,
} from '@nxpm-lumberjack/api/core/data-access'
import { Prisma } from '@prisma/client'
import { AdminCreateUserInput } from './dto/admin-create-user.input'
import { AdminUpdateUserInput } from './dto/admin-update-user.input'
import { Role } from './models/role.enum'

@Resolver()
export class ApiUserDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async createUser(input: Partial<Prisma.UserCreateInput>) {
    const password = input.password
    const hashedPassword = hashPassword(password)
    const email = input.email.trim()
    const username = this.formatUsername(input.email, input.username)
    await this.ensureUsernameAvailable(username)

    return this.data.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        phone: input.phone,
        email,
        username,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email),
        password: hashedPassword,
        role: Role.User,
      },
    })
  }

  async adminUsers(userId: string, paging: CorePagingInput) {
    await this.data.ensureAdminUser(userId)
    return this.data.user.findMany({
      take: paging.limit,
      skip: paging.skip,
    })
  }

  async adminCountUsers(adminId: string, paging: CorePagingInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)
    const total = await this.data.user.count()
    return {
      limit: paging.limit,
      skip: paging.skip,
      total,
    }
  }

  async adminUser(adminId: string, userId: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.findUnique({ where: { id: userId } })
  }

  async adminCreateUser(adminId: string, input: AdminCreateUserInput) {
    await this.data.ensureAdminUser(adminId)
    const email = input.email.trim()
    const avatarUrl = getGravatarUrl(email)
    const username = this.formatUsername(email, input.username)
    await this.ensureUsernameAvailable(username)

    return this.data.user.create({
      data: {
        ...input,
        avatarUrl,
        username,
      },
    })
  }

  async adminUpdateUser(adminId: string, userId: string, input: AdminUpdateUserInput) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.update({
      where: { id: userId },
      data: { ...input },
    })
  }

  async adminSetUserPassword(adminId: string, userId: string, password: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.update({
      where: { id: userId },
      data: { password: hashPassword(password) },
    })
  }

  async adminDeleteUser(adminId: string, userId: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.delete({ where: { id: userId } })
  }

  private formatUsername(email: string, username?: string): string {
    return username?.trim() || uniqueSuffix(email.trim().split('@')[0])
  }

  private async ensureUsernameAvailable(username: string): Promise<boolean> {
    const user = await this.data.findUserByUsername(username)
    if (user) {
      throw new Error(`This username is not available`)
    }
    return true
  }
}
