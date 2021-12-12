import { Field, ObjectType } from '@nestjs/graphql';
import { Resource } from './resource.type';
import { PaginationMeta } from './pagination-meta.type';

@ObjectType()
export class Collection<T> extends Resource<T> {
  @Field(() => PaginationMeta)
  meta: PaginationMeta;
}
