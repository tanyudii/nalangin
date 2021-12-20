import { IUser } from '@nalangin/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { transformID } from '../../@utils/helpers/transformID';

@Schema({
  collection: 'users',
  timestamps: true,
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: transformID,
  },
  toObject: {
    virtuals: true,
    versionKey: false,
    transform: transformID,
  },
})
export class User implements IUser {
  id: string;

  @Prop()
  name: string;

  @Prop()
  email?: string;

  @Prop()
  password?: string;

  @Prop()
  phoneNumber?: string;

  @Prop()
  avatar: string | null;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
