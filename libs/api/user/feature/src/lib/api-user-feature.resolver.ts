import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { User } from '@nxpm-lumberjack/api/user/data-access'

@Resolver(() => User)
export class ApiUserFeatureResolver {
  @ResolveField(() => String, { nullable: true })
  name(@Parent() user: User) {
    const name = [user?.firstName, user?.lastName].join(' ').trim()
    return name.length ? name : user?.username
  }
}
