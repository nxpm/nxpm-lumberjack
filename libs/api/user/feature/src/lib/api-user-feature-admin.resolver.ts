import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CtxUser, GqlAuthAdminGuard } from '@nxpm-lumberjack/api/auth/data-access'
import { CorePaging, CorePagingInput } from '@nxpm-lumberjack/api/core/data-access'
import {
  AdminCreateUserInput,
  AdminUpdateUserInput,
  ApiUserDataAccessService,
  User,
} from '@nxpm-lumberjack/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiUserFeatureAdminResolver {
  constructor(private readonly data: ApiUserDataAccessService) {}

  @Query(() => [User], { nullable: true })
  adminUsers(
    @CtxUser() admin: User,
    @Args({ name: 'paging', type: () => CorePagingInput, nullable: true }) paging?: CorePagingInput,
  ) {
    return this.data.adminUsers(admin.id, paging)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountUsers(
    @CtxUser() admin: User,
    @Args({ name: 'paging', type: () => CorePagingInput, nullable: true }) paging?: CorePagingInput,
  ) {
    return this.data.adminCountUsers(admin.id, paging)
  }

  @Query(() => User, { nullable: true })
  adminUser(@CtxUser() admin: User, @Args('userId') userId: string) {
    return this.data.adminUser(admin.id, userId)
  }

  @Mutation(() => User, { nullable: true })
  adminCreateUser(@CtxUser() admin: User, @Args('input') input: AdminCreateUserInput) {
    return this.data.adminCreateUser(admin.id, input)
  }

  @Mutation(() => User, { nullable: true })
  adminUpdateUser(@CtxUser() admin: User, @Args('userId') userId: string, @Args('input') input: AdminUpdateUserInput) {
    return this.data.adminUpdateUser(admin.id, userId, input)
  }

  @Mutation(() => User, { nullable: true })
  adminSetUserPassword(@CtxUser() admin: User, @Args('userId') userId: string, @Args('password') password: string) {
    return this.data.adminSetUserPassword(admin.id, userId, password)
  }

  @Mutation(() => User, { nullable: true })
  adminDeleteUser(@CtxUser() admin: User, @Args('userId') userId: string) {
    return this.data.adminDeleteUser(admin.id, userId)
  }
}
