import { Field, ObjectType } from "@nestjs/graphql";
import { Resource } from './resource.type';
import { DefaultObject } from './default-object.type';

@ObjectType()
export class DefaultObjectResource extends Resource<DefaultObjectResource> {
  @Field(() => {
    return DefaultObject;
  })
  data: DefaultObject;
}
