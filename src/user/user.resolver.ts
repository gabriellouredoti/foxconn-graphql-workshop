import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  private users: User[] = [];

  @Query(() => [User])
  findAll(
    @Args('id', { nullable: true }) id?: string,
    @Args('name', { nullable: true }) name?: string,
  ) {
    return this.users?.filter((u) => u.id == id || u.name == name);
  }

  @Mutation(() => User)
  createUser(@Args('name') name: string, @Args('email') email: string) {
    const user: User = {
      id: Date.now().toString(),
      name,
      email,
    };

    this.users.push(user);
    return user;
  }
}
