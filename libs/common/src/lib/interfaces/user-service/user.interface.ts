export interface IUser {
  id?: string;
  name: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
