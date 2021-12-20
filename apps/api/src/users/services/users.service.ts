import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async findOne(id: string): Promise<UserDocument> {
    const data = await this.userModel.findById(id)
    if (!data) {
      throw new NotFoundException('Pengguna tidak ditemukan.')
    }

    return data;
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    const data = await this.userModel.findOne({email})
    if (!data) {
      throw new NotFoundException('Pengguna tidak ditemukan.')
    }

    return data;
  }

  async findOneByPhoneNumber(phoneNumber: string): Promise<UserDocument> {
    const data = await this.userModel.find({phoneNumber})
    if (!data) {
      throw new NotFoundException('Pengguna tidak ditemukan.')
    }

    return data;
  }
}
