import { Field, ObjectType } from '@nestjs/graphql';
import { Resource } from './resource.type';
import { DefaultName } from './default-name.type';

@ObjectType()
export class DefaultNameResource extends Resource<DefaultNameResource> {
  @Field(() => DefaultName)
  data: DefaultName;
}
